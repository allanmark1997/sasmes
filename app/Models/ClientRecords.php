<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClientRecords extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function unit_service()
    {
        return $this->belongsTo(UnitService::class, "unit_services_id", "id")->with("unit_service")->with("unit");
    }
}
