<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UnitService extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function unit_service()
    {
        return $this->belongsTo(Service::class, "service_id", "id");
    }
}
