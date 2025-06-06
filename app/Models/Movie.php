<?php

namespace App\Models;

use App\Models\Scopes\LimitedScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
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

    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class, 'movie_genres');
    }

    public function favourites(): HasMany
    {
        return $this->hasMany(FavouriteMovie::class);
    }

    public function isFavourite(): bool
    {
        return $this->favourites()->where('user_id', 1)->exists();
    }
}
