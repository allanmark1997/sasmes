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

    public function unit_service()
    {
        return $this->belongsTo(UnitService::class, "unit_services_id", "id")->with("unit_service")->with("unit");
    }
}
