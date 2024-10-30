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
        $filter = $request->filter ?? "office";
        $month_today = date("Y-m");
        // dd($month_today, $from, $to);
        $client_chart = [];
        $offices = Office::get();
        $units = Unit::whereStatus(1)->get();
        $office_ids = collect($offices)->pluck("id")->toArray();
        $unit_ids = collect($units)->pluck("id")->toArray();

        $filtered_records = ClientRecords::with("office")->with("client")->with("service")->with("unit")->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, $to]);
        })->get();

        $office_counter = 0;
        // foreach ($filtered_records as $key => $record) {
        //     $client_chart[] = (object)array(
        //         "name" => $record->office->name
        //     );
        // }

        $data = [];

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

        $office_count = collect($office_sample)->map(function ($office) {
            $office = array(
                "name" => $office->chart["name"],
                "data" => array(
                    $this->collect_data($office->chart["data"])
                )
            );
            return $office;
        });
        // dd($office_count);

        return Inertia::render('Dashboard', [
            "client_chart" => $filtered_records,
            "from" => $from,
            "offices" => $offices,
            "units" => $units,
            "to" => $to,
            "filter" => $filter,
        ]);
    }

    public function collect_data($datas)
    {
        $temp_data = [];
        foreach ($datas as $key => $data) {
            $temp_data = array(
                $key => $data
            );
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
