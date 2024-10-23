<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Unit extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function office()
    {
        return $this->belongsTo(Office::class);
    }

    public static function initStorage()
    {
        if (!Storage::exists('images/units')) {
            Storage::makeDirectory('images/units');
        }
    }
}
