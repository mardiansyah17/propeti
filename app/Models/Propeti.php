<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Propeti extends Model
{
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
