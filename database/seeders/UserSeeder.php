<?php

namespace Database\Seeders;

use App\Models\AccessControl;
use App\Models\Office;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $office = Office::create([
            "abbrevation" => "Admin",
            "name" => "Admin",
            "photo" => "https://SASMES.com/storage/images/offices/1wEQbH7X5kUfcNPHDngdvXOY0axZ3og2qexzWDEm.png",
        ]);

        $user = User::factory()->create([
            "name" => "Super Admin",
            "email" => "superadmin@gmail.com",
            "password" => Hash::make("password"),
            "status" => true,
            "user_type" => "root",
            "office_id" => $office->id,
        ]);

        $access = AccessControl::create([
            "user_id"=>$user->id,
            "units"=>[]
        ]);

    }
}
