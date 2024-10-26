<?php

namespace App\Http\Controllers;

use App\Models\ClientRecords;
use App\Models\Office;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientRecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $role = $request->role ?? '';
        $office = $request->office ?? '';
        $service = $request->service ?? '';
        $from = $request->from ?? '';
        $to = $request->to ?? '';
        $records = ClientRecords::with("client")->has("client")->when($search != null || $search != "", function ($query) use ($search) {
            $query->whereHas("client", function ($query2) use ($search) {
                $query2->where("name", "LIKE", "%{$search}%");
            })->with(['client' => function ($query2) use ($search) {
                $query2->where("name", "LIKE", "%{$search}%");
            }]);
        })->when($role != null || $role != "", function ($query) use ($role) {
            $query->whereHas("client", function ($query2) use ($role) {
                $query2->where("role", $role);
            })->with(['client' => function ($query2) use ($role) {
                $query2->where("role", $role);
            }]);
        })->with("office")->has("office")->when($office != null || $office != "", function ($query) use ($office) {
            $query->where("office_id", $office);
        })->with("service")->has("service")->when($service != null || $service != "", function ($query) use ($service) {
            $query->whereHas("service", function ($query2) use ($service) {
                $query2->where("id", $service);
            })->with(['service' => function ($query2) use ($service) {
                $query2->where("id", $service);
            }]);
        })->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
            $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
        })->orderBy("created_at", "desc")->paginate(8);
        $offices = Office::get();
        $services = Service::when($office !=  null || $office != "" && $to != null || $to != "", function ($query) use ($office) {
            $query->whereOfficeId($office);
        })->get();
        return Inertia::render('ClientRecord/Index', [
            "client_record" => $records,
            "offices" => $offices,
            "services" => $services,
            "search" => $search,
            "role" => $role,
            "office" => $office,
            "service" => $service,
            "from" => $from,
            "to" => $to,
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
