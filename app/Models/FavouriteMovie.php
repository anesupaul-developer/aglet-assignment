<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FavouriteMovie extends Model
{
    protected $guarded = [];

    public function movie(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Movie::class, 'movie_id', 'id');
    }
}
