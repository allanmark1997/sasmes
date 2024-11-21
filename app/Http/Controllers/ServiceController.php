<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\Service;
use App\Models\Unit;
use App\Models\UnitService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin" || Auth::user()->user_type == "director") {
            $search = $request->search ?? '';
            if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin" || Auth::user()->user_type == "vcsas") {
                $office = $request->office ?? '';
            } else {
                $office = Auth::user()->office_id;
            }
            $services = Service::with("office")->with("unit_service")->when($office != null || $office != "", function ($query) use ($office) {
                $query->whereOfficeId($office);
            })->when($search != null || $search != "", function ($query) use ($search, $office) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%")->whereOfficeId($office);
            })
                ->orderBy("name", "asc")->paginate(8);

            if (Auth::user()->user_type == "director") {
                $offices = Office::whereId($office)->with("units")->first();
                $units = Unit::whereOfficeId($office)->get();
            } else {
                $offices = Office::with("units")->get();
                $units = Unit::get();
            }

            return Inertia::render('ServiceManagement/Index', [
                "services" => $services,
                "search" => $search,
                "offices" => $offices,
                "office" => $office,
                "units" => $units,
            ]);
        } else {
            return redirect()->route('dashboard');
        }
    }

    public function status(Request $request, Service $service)
    {
        $service->update([
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
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required", "unique:services"],
            'image' => ['max:1024'],
            'office_id' => ['required'],
        ]);

        $imageName = null;
        if ($request->hasfile('image')) {
            Service::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/services');
        }

        $service = Service::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/services/' . $imageName ?? 1,
            "user_id" => Auth::user()->id,
            "office_id" => $request->office_id,
            "status" => true
        ]);

        if ($request->selected_units != null) {
            foreach ($request->selected_units as $key => $unit) {
                UnitService::create([
                    "service_id" => $service->id,
                    "unit_id" => $unit,
                    "status" => true
                ]);
            }
        }

        return back();
    }

    public function store_director(Request $request)
    {
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required", "unique:services"],
            'image' => ['max:1024'],
        ]);

        $imageName = null;
        if ($request->hasfile('image')) {
            Service::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/services');
        }

        $service = Service::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/services/' . $imageName ?? 1,
            "user_id" => Auth::user()->id,
            "office_id" => Auth::user()->office_id,
            "status" => true
        ]);

        if ($request->selected_units != null) {
            foreach ($request->selected_units as $key => $unit) {
                UnitService::create([
                    "service_id" => $service->id,
                    "unit_id" => $unit,
                    "status" => true
                ]);
            }
        }


        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $extracted_path = explode("/", $service->photo ?? "null/null/null/null/null/null/null");
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required"],
            'image' => ['max:1024'],
        ]);

        $imageName = null;
        if ($request->hasfile('image')) {
            Service::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            if (Storage::exists('images/services/' . $extracted_path[6]) == true) {
                Storage::delete('images/services/' . $extracted_path[6]);
            }
            $photo->store('images/services');
        }
        if ($request->hasfile('image')) {
            $service->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation,
                "photo" => env('APP_URL') . '/storage/images/services/' . $imageName ?? 1
            ]);
        } else {
            $service->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation
            ]);
        }

        if ($request->selected_units != null) {
            foreach ($request->selected_units as $key => $unit) {
                $unit_service = UnitService::whereUnitId($unit)->whereServiceId($service->id)->first();
                if ($unit_service == null) {
                    UnitService::create([
                        "service_id" => $service->id,
                        "unit_id" => $unit,
                        "status" => true
                    ]);
                }
            }
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();
        return back();
    }
}
