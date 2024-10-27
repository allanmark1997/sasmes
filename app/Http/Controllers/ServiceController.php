<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\Service;
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
            $office = $request->office ?? '';
            if (Auth::user()->user_type == "director") {
                $services = Service::whereOfficeId(Auth::user()->office_id)->with("office")->when($search != null || $search != "", function ($query) use ($search) {
                    $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
                })
                    ->when($office != null || $office != "", function ($query) use ($office) {
                        $query->whereOfficeId($office);
                    })->orderBy("name", "asc")->paginate(8);
            } else {
                $services = Service::with("office")->when($search != null || $search != "", function ($query) use ($search) {
                    $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
                })
                    ->when($office != null || $office != "", function ($query) use ($office) {
                        $query->whereOfficeId($office);
                    })->orderBy("name", "asc")->paginate(8);
            }

            $offices = Office::get();
            return Inertia::render('ServiceManagement/Index', [
                "services" => $services,
                "search" => $search,
                "offices" => $offices,
                "office" => $office,
            ]);
        } else {
            return redirect()->route('dashboard');
        }
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
            'image' => ['required', 'max:1024'],
            'office_id' => ['required'],
        ]);

        $imageName = $request->input('image');
        if ($request->hasfile('image')) {
            Service::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/services');
        }

        Service::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/services/' . $imageName,
            "user_id" => Auth::user()->id,
            "office_id" => $request->office_id,
        ]);

        return back();
    }

    public function store_director(Request $request)
    {
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required", "unique:services"],
            'image' => ['required', 'max:1024'],
        ]);

        $imageName = $request->input('image');
        if ($request->hasfile('image')) {
            Service::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/services');
        }

        Service::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/services/' . $imageName,
            "user_id" => Auth::user()->id,
            "office_id" => Auth::user()->office_id,
        ]);

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

        $imageName = $request->input('image');
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
                "photo" => env('APP_URL') . '/storage/images/services/' . $imageName
            ]);
        } else {
            $service->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation
            ]);
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
