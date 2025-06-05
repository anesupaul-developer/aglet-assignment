<?php

namespace App\Observers;

use App\Models\Movie;
use Illuminate\Support\Facades\DB;

use function intval;

class MovieObserver
{
    /**
     * Handle the Movie "created" event.
     */
    public function created(Movie $movie): void
    {
        $genreIds = $movie->genre_ids;

        if (! empty($genreIds)) {
            $data = [];

            foreach ($genreIds as $genreId) {
                $data[] = [
                    'movie_id' => $movie->id,
                    'genre_id' => DB::table('genres')
                        ->where('provider', $movie->getAttribute('provider'))
                        ->where('source_id', intval($genreId))
                        ->value('id'),
                ];
            }

            DB::table('movie_genres')->insert($data);
        }
    }

    /**
     * Handle the Movie "updated" event.
     */
    public function updated(Movie $movie): void
    {
        //
    }

    /**
     * Handle the Movie "deleted" event.
     */
    public function deleted(Movie $movie): void
    {
        //
    }

    /**
     * Handle the Movie "restored" event.
     */
    public function restored(Movie $movie): void
    {
        //
    }

    /**
     * Handle the Movie "force deleted" event.
     */
    public function forceDeleted(Movie $movie): void
    {
        //
    }
}
