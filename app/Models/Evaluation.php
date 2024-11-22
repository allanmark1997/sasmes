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

    public function client_record()
    {
        return $this->belongsTo(ClientRecords::class)->with("client")->with("unit_service");
    }
}
