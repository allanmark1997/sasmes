<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientRecords;
use App\Models\Office;
use App\Models\Unit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $from = $request->from ?? date("Y-m-d");
        $to = $request->to ?? date("Y-m-d");
        $office_id = $request->office_id ?? "";

        $offices = Office::get();
        $units = Unit::get();
        $filtered_records = ClientRecords::with("office")->has("office")->with("client")->has("client")->with("service")->has("service")->with("unit")->has("unit")->when($office_id !=  null || $office_id != "", function ($query) use ($office_id) {
            $query->whereOfficeId($office_id);
        })->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->get();

        $data = [];

        if ($office_id == "") {
            $office_sample = collect($offices)->map(function ($office) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    if ($office->id == $record->office_id) {
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $office->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();

            foreach ($filtered_records->groupBy("office.name") as $key => $office) {
                $iteration = 0;
                foreach ($office->groupBy("role") as $key2 => $role) {
                    $office_count[$key]["type"][$iteration]["name"] = $key2;
                    foreach ($role->groupBy("type") as $key3 => $type) {
                        $office_count[$key]["type"][$iteration]["data"][$key3] = $type->count();
                    }
                    $iteration++;
                }
    
                foreach ($office->groupBy("client.sex") as $key4 => $sex) {
                    $office_count[$key]["sex"][$key4] = $sex->count();
                }
    
                $office_count[$key]["overall_count"] = $office->count();
                
                foreach ($office->groupBy("type") as $key2 => $type) {
                    $office_count[$key]["type_text"][$key2] = $type->count();
                }
            }
        } else {
            $office_sample = collect($units)->map(function ($unit) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    if ($unit->id == $record->unit_id) {
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $unit->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();

            foreach ($filtered_records->groupBy("unit.name") as $key => $office) {
                $iteration = 0;
                foreach ($office->groupBy("role") as $key2 => $role) {
                    $office_count[$key]["type"][$iteration]["name"] = $key2;
                    foreach ($role->groupBy("type") as $key3 => $type) {
                        $office_count[$key]["type"][$iteration]["data"][$key3] = $type->count();
                    }
                    $iteration++;
                }
    
                foreach ($office->groupBy("client.sex") as $key4 => $sex) {
                    $office_count[$key]["sex"][$key4] = $sex->count();
                }
    
                $office_count[$key]["overall_count"] = $office->count();
                
                foreach ($office->groupBy("type") as $key2 => $type) {
                    $office_count[$key]["type_text"][$key2] = $type->count();
                }
            }
        }

        $overall_count = collect($office_sample)->map(function ($office) {
            $office = (object)array(
                "name" => $office->chart["name"],
                "data" => (object)$this->collect_data($office->chart["data"]),
            );
            return $office;
        })->toArray();

        return Inertia::render('Dashboard', [
            "client_chart" => $overall_count,
            "office_count_role_gender" => $office_count??[],
            "from" => $from,
            "offices" => $offices,
            "to" => $to,
            "office_id" => $office_id,
        ]);
    }

    public function collect_data($datas)
    {
        $temp_data = [];
        foreach ($datas as $key => $data) {
            $temp_data[$key] = count($data);
        }
        return $temp_data;
    }

    public function count_male_female($datas)
    {
        $temp_data = [];
        foreach ($datas as $key => $data) {
            $temp_data[$key] = count(collect($data)->pluck("client")->pluck("sex"));
            // foreach ($data as $key2 => $client) {
            //     $temp_data[$key][$key2] = $client;
            // }
        }
        return $temp_data;
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
