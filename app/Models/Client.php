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

    public static function initStorage()
    {
        if (!Storage::exists('images/clients')) {
            Storage::makeDirectory('images/clients');
        }
    }
}
