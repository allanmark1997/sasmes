<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ClientController extends Controller
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
            'name' => ["required"],
            'sex' => ["required"],
            'birthday' => ["required"],
            'address' => ["required"],
            'role' => ["required"],
            'photo' => ['required', 'max:1024'],
            'id_photo' => ['required', 'max:1024'],
        ]);

        if ($request->photo == null) {
            throw ValidationException::withMessages([
                'photo' => "Please select service atleast 1.",
            ]);
        }
        if ($request->id_photo == null) {
            throw ValidationException::withMessages([
                'id_photo' => "Please select service atleast 1.",
            ]);
        }

        $profileName = $request->input('photo');
        $IdName = $request->input('post_image_id');
        if ($request->hasfile('photo')) {
            Client::initStorageProfile();
            $photo = $request->file('photo');
            $profileName = $photo->hashName();
            $photo->store('images/clients/profile');
        }

        if ($request->hasfile('id_photo')) {
            Client::initStorageProfile();
            $id_photo = $request->file('id_photo');
            $IdName = $id_photo->hashName();
            $id_photo->store('images/clients/id');
        }

        Client::create([
            "name" => $request->name,
            "sex" => $request->sex,
            "birthday" => $request->birthday,
            "address" => $request->address,
            "type" => $request->type,
            "role" => $request->role,
            "photo" => env('APP_URL') . '/storage/images/clients/profile/' . $profileName,
            "id_photo" => env('APP_URL') . '/storage/images/clients/id/' . $IdName,
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
