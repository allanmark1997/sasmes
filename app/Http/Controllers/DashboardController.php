<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientRecords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $month_today = date("Y-m");
        // dd($month_today);
        $client_chart = [];
        $clients_record = ClientRecords::where("created_at", "LIKE", "%{$month_today}%")->with("client")->with("office")->with("client")->with("service")->get();

        // dd($clients_record);
        return Inertia::render('Dashboard', [
            "client_chart" => $client_chart
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
