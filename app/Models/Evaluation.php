<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'data' => 'json'
        ];
    }

    public function office()
    {
        return $this->belongsTo(Office::class);
    }

    public function service()
    {
        return $this->belongsTo(UnitService::class, "unit_services_id", "id")->with("unit_service")->has("unit_service");
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
