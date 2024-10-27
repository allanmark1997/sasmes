<?php

namespace App\Http\Controllers;

use App\Models\Office;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin") {
            $offices = Office::when($search != null || $search != "", function ($query) use ($search) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("abbrevation", "LIKE", "%{$search}%");
            })->orderBy("name", "asc")->paginate(8);
        } else {
            return redirect()->route('unit.index', ["office_id" => Auth::user()->office_id]);
        }
        return Inertia::render('Office/Index', [
            "offices" => $offices,
            "search" => $search
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
            'name' => ["required", "unique:offices"],
            'abbrevation' => ["required", "unique:offices"],
            'image' => ['required', 'max:1024'],
        ]);

        $imageName = $request->input('image');
        if ($request->hasfile('image')) {
            Office::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            $photo->store('images/offices');
        }

        Office::create([
            "name" => $request->name,
            "abbrevation" => $request->abbrevation,
            "photo" => env('APP_URL') . '/storage/images/offices/' . $imageName
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Office $office)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Office $office)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Office $office)
    {
        $extracted_path = explode("/", $office->photo ?? "null/null/null/null/null/null/null");
        $request->validate([
            'name' => ["required"],
            'abbrevation' => ["required"],
            'image' => ['max:1024'],
        ]);

        $imageName = $request->input('image');
        if ($request->hasfile('image')) {
            Office::initStorage();
            $photo = $request->file('image');
            $imageName = $photo->hashName();
            if (Storage::exists('images/offices/' . $extracted_path[6]) == true) {
                Storage::delete('images/offices/' . $extracted_path[6]);
            }
            $photo->store('images/offices');
        }
        if ($request->hasfile('image')) {
            $office->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation,
                "photo" => env('APP_URL') . '/storage/images/offices/' . $imageName
            ]);
        } else {
            $office->update([
                "name" => $request->name,
                "abbrevation" => $request->abbrevation
            ]);
        }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Office $office)
    {
        $office->delete();
        return back();
    }
}
