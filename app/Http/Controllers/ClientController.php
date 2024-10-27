<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search ?? '';
        $clients = Client::when($search != null || $search != "", function ($query) use ($search) {
            $query->where("fname", "LIKE", "%{$search}%")->orWhere("mname", "LIKE", "%{$search}%")->orWhere("lname", "LIKE", "%{$search}%");
        })->orderBy("lname", "asc")->paginate(8);
        return Inertia::render('ClientManagement/Index', [
            "clients" => $clients,
            "search" => $search,
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
            'fname' => ["required"],
            'lname' => ["required"],
            'sex' => ["required"],
            // 'birthday' => ["required"],
            // 'address' => ["required"],
            // 'role' => ["required"],
            // 'photo' => ['required', 'max:1024'],
            // 'id_photo' => ['required', 'max:1024'],
        ]);

        // if ($request->photo == null) {
        //     throw ValidationException::withMessages([
        //         'photo' => "Please select service atleast 1.",
        //     ]);
        // }
        // if ($request->id_photo == null) {
        //     throw ValidationException::withMessages([
        //         'id_photo' => "Please select service atleast 1.",
        //     ]);
        // }

        // $profileName = $request->input('photo');
        // $IdName = $request->input('post_image_id');
        // if ($request->hasfile('photo')) {
        //     Client::initStorageProfile();
        //     $photo = $request->file('photo');
        //     $profileName = $photo->hashName();
        //     $photo->store('images/clients/profile');
        // }

        // if ($request->hasfile('id_photo')) {
        //     Client::initStorageProfile();
        //     $id_photo = $request->file('id_photo');
        //     $IdName = $id_photo->hashName();
        //     $id_photo->store('images/clients/id');
        // }

        Client::create([
            "fname" => $request->fname,
            "mname" => $request->mname,
            "lname" => $request->lname,
            "sex" => $request->sex,
            // "birthday" => $request->birthday,
            // "address" => $request->address,
            // "type" => $request->type,
            // "role" => $request->role,
            // "photo" => env('APP_URL') . '/storage/images/clients/profile/' . $profileName,
            // "id_photo" => env('APP_URL') . '/storage/images/clients/id/' . $IdName,
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
        // $extracted_path_profile = explode("/", $client->photo ?? "null/null/null/null/null/null/null");
        // $extracted_path_id = explode("/", $client->id_photo ?? "null/null/null/null/null/null/null");
        $request->validate([
            'fname' => ["required"],
            'lname' => ["required"],
            'sex' => ["required"],
            // 'birthday' => ["required"],
            // 'address' => ["required"],
            // 'role' => ["required"],
            // 'photo' => ['max:1024'],
            // 'id_photo' => ['max:1024'],
        ]);

        // $profileName = $request->input('photo');
        // if ($request->hasfile('photo')) {
        //     Client::initStorageProfile();
        //     $photo = $request->file('photo');
        //     $profileName = $photo->hashName();
        //     if (Storage::exists('images/clients/profile/' . $extracted_path_profile[6]) == true) {
        //         Storage::delete('images/clients/profile/' . $extracted_path_profile[6]);
        //     }
        //     $photo->store('images/clients/profile');
        // }

        // $idName = $request->input('id_photo');
        // if ($request->hasfile('id_photo')) {
        //     Client::initStorageId();
        //     $photo2 = $request->file('id_photo');
        //     $idName = $photo2->hashName();
        //     if (Storage::exists('images/clients/id/' . $extracted_path_id[6]) == true) {
        //         Storage::delete('images/clients/id/' . $extracted_path_id[6]);
        //     }
        //     $photo2->store('images/clients/id');
        // }

        // if ($request->hasfile('photo') && $request->hasfile('id_photo')) {
        //     $client->update([
        //         "name" => $request->name,
        //         "sex" => $request->sex,
        //         "birthday" => $request->birthday,
        //         "address" => $request->address,
        //         "type" => $request->type,
        //         "role" => $request->role,
        //         "photo" => env('APP_URL') . '/storage/images/clients/profile/' . $profileName,
        //         "id_photo" => env('APP_URL') . '/storage/images/clients/id/' . $idName,
        //     ]);
        // }
        // elseif ($request->hasfile('photo')) {
        //     $client->update([
        //         "name" => $request->name,
        //         "sex" => $request->sex,
        //         "birthday" => $request->birthday,
        //         "address" => $request->address,
        //         "type" => $request->type,
        //         "role" => $request->role,
        //         "photo" => env('APP_URL') . '/storage/images/clients/profile/' . $profileName,
        //     ]);
        // }
        // elseif ($request->hasfile('id_photo')) {
        //     $client->update([
        //         "name" => $request->name,
        //         "sex" => $request->sex,
        //         "birthday" => $request->birthday,
        //         "address" => $request->address,
        //         "type" => $request->type,
        //         "role" => $request->role,
        //         "id_photo" => env('APP_URL') . '/storage/images/clients/id/' . $idName,
        //     ]);
        // } else {
        $client->update([
            "fname" => $request->fname,
            "mname" => $request->mname,
            "lname" => $request->lname,
            "sex" => $request->sex,
            // "birthday" => $request->birthday,
            // "address" => $request->address,
            // "type" => $request->type,
            // "role" => $request->role,
        ]);
        // }

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
