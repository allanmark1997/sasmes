<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Office;
use App\Models\Service;
use App\Models\Unit;
use App\Models\UnitService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class UnitServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $office = Office::whereId($request->office_id)->first();
        $unit = Unit::whereId($request->unit_id)->first();
        $unit_services = UnitService::whereUnitId($request->unit_id)->with("unit_service")->has("unit_service")->when($search != null || $search != "", function ($query) use ($search) {
            $query->whereHas("unit_service", function ($query2) use ($search) {
                $query2->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
            })->with(['unit_service' => function ($query2) use ($search) {
                $query2->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
            }]);
        })->orderBy("created_at", "asc")->paginate(8);
        $except_already_exist_service = collect(UnitService::whereUnitId($request->unit_id)->get())->pluck("service_id")->toArray();
        $services = Service::whereNotIn("id", $except_already_exist_service)->get();
        $clients = Client::get();
        return Inertia::render('UnitServices/Index', [
            "unit_services" => $unit_services,
            "search" => $search,
            "office_id" => $request->office_id,
            "office" => $office,
            "unit_id" => $request->unit_id,
            "unit" => $unit,
            "services" => $services,
            "clients" => $clients
        ]);
    }

    public function status(Request $request, UnitService $unitService)
    {
        $unitService->update([
            "status" => $request->status
        ]);
        return back();
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
        if ($request->selected == null) {
            throw ValidationException::withMessages([
                'services' => "Please select service atleast 1.",
            ]);
        }

        foreach ($request->selected as $key => $service) {
            UnitService::create([
                "service_id" => $service,
                "unit_id" => $request->unit_id,
                "status" => true
            ]);
        }

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(UnitService $unitService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UnitService $unitService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UnitService $unitService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UnitService $unitService)
    {
        //
    }
}
