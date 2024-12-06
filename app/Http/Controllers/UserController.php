<?php

namespace App\Http\Controllers;

use App\Mail\RegisterNotificationEmail;
use App\Models\AccessControl;
use App\Models\Office;
use App\Models\Service;
use App\Models\Unit;
use App\Models\UnitService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UserController extends Controller
{


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if (Auth::user()->user_type == "root" || Auth::user()->user_type == "admin" || Auth::user()->user_type == "director") {
            $search = $request->search ?? '';
            $position = $request->position ?? '';
            $office = $request->office ?? '';

            if (Auth::user()->user_type == "director") {
                $users = User::whereOfficeId(Auth::user()->office_id)->when($position != null || $position != "", function ($query) use ($position) {
                    $query->where("user_type", $position);
                })->when($search != null || $search != "", function ($query) use ($search) {
                    $query->where("name", "LIKE", "%{$search}%")->orWhere("email", "LIKE", "%{$search}%");
                })->with("office")->has("office")->when($office != null || $office != "", function ($query) use ($office) {
                    $query->whereHas("office", function ($query2) use ($office) {
                        $query2->where("id", $office);
                    })->with(['office' => function ($query2) use ($office) {
                        $query2->where("id", $office);
                    }]);
                })->with("access_control")->orderBy("name", "asc")->paginate(8);
                $units = Unit::whereOfficeId(Auth::user()->office_id)->get();
            } else {
                $users = User::when($position != null || $position != "", function ($query) use ($position) {
                    $query->where("user_type", $position);
                })->when($search != null || $search != "", function ($query) use ($search) {
                    $query->where("name", "LIKE", "%{$search}%")->orWhere("email", "LIKE", "%{$search}%");
                })->with("office")->has("office")->when($office != null || $office != "", function ($query) use ($office) {
                    $query->whereHas("office", function ($query2) use ($office) {
                        $query2->where("id", $office);
                    })->with(['office' => function ($query2) use ($office) {
                        $query2->where("id", $office);
                    }]);
                })->with("access_control")->orderBy("name", "asc")->paginate(8);

                $units = Unit::when($office != null || $office != "", function ($query) use ($office) {
                    $query->where("office_id", $office);
                })->get();
            }

            $offices = Office::get();
            $services = Service::get();

            return Inertia::render('UserManagement/Index', [
                "users" => $users,
                "search" => $search,
                "offices" => $offices,
                "services" => $services,
                "position" => $position,
                "office" => $office,
                "units" => $units,
            ]);
        } else {
            return redirect()->route('dashboard');
        }
    }

    public function status(Request $request, User $user)
    {
        $user->update([
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
            'email' => ["required", "email", "unique:users"],
            'user_type' => ["required"],
            'office_id' => ["required"],
        ]);

        $generated_password = Str::random(8);

        try {
            Mail::to($request->email)->send(new RegisterNotificationEmail($request->name, $request->email, $generated_password));
        } catch (\Throwable $th) {
            //throw $th;
        }

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($generated_password),
            "user_type" => $request->user_type,
            "office_id" => $request->office_id,
            "status" => true
        ]);

        AccessControl::create([
            "user_id" => $user->id,
            "units" => []
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => ["required"],
            'user_type' => ["required"],
            'office_id' => ["required"],
        ]);
        if ($request->email == $user->email) {
            $request->validate([
                'email' => ["required", "email"]
            ]);
        } else {
            $request->validate([
                'email' => ["required", "email", "unique:users"],
            ]);
        }
        $generated_password = Str::random(8);
        if ($request->change_pass == true) {
            try {
                Mail::to($request->email)->send(new RegisterNotificationEmail($request->name, $request->email, $generated_password));
            } catch (\Throwable $th) {
                //throw $th;
            }
            $user->update([
                "password" => Hash::make($generated_password),
            ]);
        }

        $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "user_type" => $request->user_type,
            "office_id" => $request->office_id,
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
