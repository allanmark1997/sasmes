<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Client extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public static function initStorageProfile()
    {
        if (!Storage::exists('images/clients/profile')) {
            Storage::makeDirectory('images/clients/profile');
        }
    }

    public static function initStorageId()
    {
        if (!Storage::exists('images/clients/id')) {
            Storage::makeDirectory('images/clients/id');
        }
    }
}
