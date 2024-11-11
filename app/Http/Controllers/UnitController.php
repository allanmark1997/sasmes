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

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $office = Office::whereId($request->office_id)->first();
        
        $services = Service::whereOfficeId($request->office_id)->get();
        if (count(collect(Auth::user()->load("access_control"))["access_control"]["units"]) == 0) {
            $units = Unit::whereOfficeId($request->office_id)->when($search != null || $search != "", function ($query) use ($search) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
            })->orderBy("name", "asc")->paginate(8);
        }
        else{
            $units = Unit::whereOfficeId($request->office_id)->when($search != null || $search != "", function ($query) use ($search) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
            })->whereIn("id", collect(Auth::user()->load("access_control"))["access_control"]["units"])->orderBy("name", "asc")->paginate(8);
        }

        return Inertia::render('Unit/Index', [
            "units" => $units,
            "search" => $search,
            "office_id" => $request->office_id,
            "office" => $office,
            "services" => $services
        ]);
    }

    public function status(Request $request, Unit $unit)
    {
        $unit->update([
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
            'name' => ["required", "unique:units"],
            'abbrevation' => ["required", "unique:units"],
            'image' => ['max:1024']
        ]);
        $imageName = null;
        if ($request->hasfile('image')) {
            Unit::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/units');
        }
        $unit = Unit::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/units/' . $imageName??1,
            "status" => true,
            "office_id" => $request->office_id
        ]);

        if ($request->selected != null) {
            foreach ($request->selected as $key => $id) {
                UnitService::create([
                    "service_id" => $id,
                    "unit_id" => $unit->id,
                    "status" => true
                ]);
            }
        }

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Unit $unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Unit $unit)
    {
        $extracted_path = explode("/", $unit->photo ?? "null/null/null/null/null/null/null");
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required"],
            'image' => ['max:1024'],
        ]);

        $imageName = null;
        if ($request->hasfile('image')) {
            Unit::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            if (Storage::exists('images/units/' . $extracted_path[6]) == true) {
                Storage::delete('images/units/' . $extracted_path[6]);
            }
            $photo->store('images/units');
        }
        if ($request->hasfile('image')) {
            $unit->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation,
                "photo" => env('APP_URL') . '/storage/images/units/' . $imageName??1
            ]);
        } else {
            $unit->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation
            ]);
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit $unit)
    {
        $unit->delete();
        return back();
    }
}
