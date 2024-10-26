<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientRecords;
use App\Models\Office;
use App\Models\Unit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $from = $request->from ?? date("Y-m");
        $to = $request->to ?? date("Y-m");
        $filter = $request->filter ?? "office";
        $month_today = date("Y-m");
        // dd($month_today, $from, $to);
        $client_chart = [];
        $offices = Office::get();
        $units = Unit::whereStatus(1)->get();
        $office_ids = collect($offices)->pluck("id")->toArray();
        $unit_ids = collect($units)->pluck("id")->toArray();

        $filtered_records = collect(ClientRecords::with("office")->with("client")->with("service")->with("unit")->get())->whereBetween('created_at', [$from, Carbon::parse($to)->addMonths(1)->format("Y-m")]);

        $office_counter = 0;
        foreach ($filtered_records as $key => $record) {
            $client_chart[] = (object)array(
                "name" => $record->office->name
            );
        }

        $office_sample = collect($offices)->map(function ($office) use ($filtered_records) {
            dd(collect($filtered_records), $filtered_records->toArray());
            $office = (object)array(
                "chart" => array(
                    "name" => $office->abbrevation,
                    "data" => array()
                )
                

                // count(collect($filtered_records)->where("office_id", $office->id))
            );
            return $office;
        })->toArray();
        dd($client_chart, $office_sample);

        return Inertia::render('Dashboard', [
            "client_chart" => $filtered_records,
            "from" => $from,
            "offices" => $offices,
            "units" => $units,
            "to" => $to,
            "filter" => $filter,
        ]);
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
