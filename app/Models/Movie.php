<?php

namespace App\Models;

use App\Models\Scopes\LimitedScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'genre_ids' => 'array',
    ];

    protected static function booted()
    {
        static::addGlobalScope(new LimitedScope);
    }

    public function genres(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Genre::class, 'movie_genres');
    }
}
