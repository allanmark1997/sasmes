<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AccessControl extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'units' => 'json'
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
