<?php

namespace App\Http\Controllers;

use App\Models\ClientRecords;
use Illuminate\Http\Request;

class ClientRecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $request->validate([
            'client' => ["required"],
            'appointment_type' => ["required"],
        ]);

        ClientRecords::create([
            "client_id" => $request->client["id"],
            "appointment_type" => $request->appointment_type,
            "office_id" => $request->office_id,
            "unit_id" => $request->unit_id,
            "unit_services_id" => $request->unit_services_id,
            "status" => true,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ClientRecords $clientRecords)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ClientRecords $clientRecords)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ClientRecords $clientRecords)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ClientRecords $clientRecords)
    {
        //
    }
}
