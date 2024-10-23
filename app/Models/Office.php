<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Office extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function units()
    {
        return $this->hasMany(Unit::class);
    }

    public static function initStorage()
    {
        if (!Storage::exists('images/offices')) {
            Storage::makeDirectory('images/offices');
        }
    }
}
