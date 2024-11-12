<?php

namespace App\Http\Controllers;

use App\Models\ClientRecords;
use App\Models\Office;
use App\Models\Service;
use App\Models\UnitService;
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
                $query2->where("fname", "LIKE", "%{$search}%")->orWhere("mname", "LIKE", "%{$search}%")->orWhere("lname", "LIKE", "%{$search}%");
            })->with(['client' => function ($query2) use ($search) {
                $query2->where("fname", "LIKE", "%{$search}%")->orWhere("mname", "LIKE", "%{$search}%")->orWhere("lname", "LIKE", "%{$search}%");
            }]);
        })->when($role != null || $role != "", function ($query) use ($role) {
            $query->where("role", $role);
        })->with("unit_service")->when($office !=  null || $office != "", function ($query) use ($office) {
            $query->whereHas("unit_service", function ($query2) use ($office) {
                $query2->whereHas("unit", function ($query3) use ($office) {
                    $query3->whereHas("office", function ($query4) use ($office) {
                        $query4->whereId($office);
                    })->with(['office' => function ($query4) use ($office) {
                        $query4->whereId($office);
                    }]);
                })->with(['unit' => function ($query3) use ($office) {
                    $query3->whereHas("office", function ($query4) use ($office) {
                        $query4->whereId($office);
                    })->with(['office' => function ($query4) use ($office) {
                        $query4->whereId($office);
                    }]);
                }]);
            })->with(['unit_service' => function ($query2) use ($office) {
                $query2->whereHas("unit", function ($query3) use ($office) {
                    $query3->whereHas("office", function ($query4) use ($office) {
                        $query4->whereId($office);
                    })->with(['office' => function ($query4) use ($office) {
                        $query4->whereId($office);
                    }]);
                })->with(['unit' => function ($query3) use ($office) {
                    $query3->whereHas("office", function ($query4) use ($office) {
                        $query4->whereId($office);
                    })->with(['office' => function ($query4) use ($office) {
                        $query4->whereId($office);
                    }]);
                }]);
            }]);
        })
            ->when($service !=  null || $service != "", function ($query) use ($service) {
                $query->whereHas("unit_service", function ($query2) use ($service) {
                    $query2->whereHas("unit_service", function ($query3) use ($service) {
                        $query3->whereId($service);
                    })->with(['unit_service' => function ($query3) use ($service) {
                        $query3->whereId($service);
                    }]);
                })->with(['unit_service' => function ($query2) use ($service) {
                    $query2->whereHas("unit_service", function ($query3) use ($service) {
                        $query3->whereId($service);
                    })->with(['unit_service' => function ($query3) use ($service) {
                        $query3->whereId($service);
                    }]);
                }]);
            })
            ->when($from !=  null || $from != "" && $to != null || $to != "", function ($query) use ($from, $to) {
                $query->whereBetween('created_at', [$from, Carbon::parse($to)->addDays(1)->format("Y-m-d")]);
            })->orderBy("created_at", "desc")->paginate(8);
        $offices = Office::whereNotIn("abbrevation", ["Admin", "VCSAS"])->get();
        $services = Service::when($office != null || $office != "", function ($query) use ($office) {
            $query->where("office_id", $office);
        })->get();
        return Inertia::render('ClientRecord/Index', [
            "client_record" => $records,
            "offices" => $offices,
            "services" => $services ?? "",
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
            'role' => ["required"],
            'type' => ["required"],
        ]);

        ClientRecords::create([
            "client_id" => $request->client["id"],
            "unit_services_id" => $request->unit_services_id,
            "type" => $request->type,
            "role" => $request->role,
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
