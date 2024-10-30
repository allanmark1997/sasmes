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
        $office = $request->office ?? "";
        $unit = $request->unit ?? "";
        $filter = $request->filter ?? "office";

        $offices = Office::get();
        $units = Unit::when($office !=  null || $office != "", function ($query) use ($office) {
            $query->whereOfficeId($office);
        })->whereStatus(1)->get();

        $filtered_records = ClientRecords::with("office")->has("office")->with("client")->has("client")->with("service")->has("service")->with("unit")->has("unit")->when($unit !=  null || $unit != "", function ($query) use ($unit) {
            $query->whereUnitId($unit);
        })->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->get();

        $data = [];

        if ($request->filter == "office") {
            $office_sample = collect($offices)->map(function ($office) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    $counter = 0;
                    if ($office->id == $record->office_id) {
                        $counter++;
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                    $counter = 0;
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $office->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();
        } else {
            $office_sample = collect($units)->map(function ($office) use ($filtered_records, $data) {
                foreach ($filtered_records as $key => $record) {
                    $counter = 0;
                    if ($office->id == $record->office_id) {
                        $counter++;
                        $data[Carbon::parse($record->created_at)->format("Y-m-d")][$key] = $record;
                    }
                    $counter = 0;
                }
                $office = (object)array(
                    "chart" => array(
                        "name" => $office->abbrevation,
                        "data" => $data
                    )
                );
                return $office;
            })->toArray();
        }


        $office_count = collect($office_sample)->map(function ($office) {
            $office = (object)array(
                "name" => $office->chart["name"],
                "data" => (object)$this->collect_data($office->chart["data"])
            );
            return $office;
        })->toArray();
        // dd($office_count, $office_sample);

        return Inertia::render('Dashboard', [
            "client_chart" => $office_count,
            "from" => $from,
            "offices" => $offices,
            "units" => $units,
            "to" => $to,
            "filter" => $filter,
            "office" => $office,
            "unit" => $unit,
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
