<?php

namespace App\Adapters;

use App\Contracts\MovieSourceInterface;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Str;
use function config;
use const PHP_EOL;

final class TmdbMovieAdapter implements MovieSourceInterface
{
    /**
     * @throws RequestException
     * @throws ConnectionException
     */
    public function download(): array
    {
        echo 'Connecting via Tmdb Adapter....'.PHP_EOL;

        $currentPage = Cache::get('tmdb_current_page') ?: 1;

        echo "Page ".$currentPage.PHP_EOL;

        // Since we just want 45 records, we stop at page 3

        if ($currentPage < 4) {
            return Http::withHeaders([
                'Authorization' => 'Bearer '.config('services.movies.tmdb.access_token'),
                'accept' => 'application/json'])
                ->get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page='.$currentPage.'&sort_by=popularity.desc')
                ->throw()
                ->json();
        }

        return [];
    }

    public function transform(mixed $payload): array
    {
        echo 'Data transformation ......'.PHP_EOL;

        Cache::put('tmdb_total_pages', $payload['total_pages'], 365 * 24 * 60 * 60);
        Cache::put('tmdb_current_page', $payload['page'] + 1, 365 * 24 * 60 * 60);

        $response = collect($payload['results'])->map(function (array $movie) {
            return [
                'adult' => $movie['adult'],
                'backdrop_url' => Str::of('https://image.tmdb.org/t/p/w500')
                    ->append($movie['backdrop_path'])
                    ->toString(),
                'source_id' => $movie['id'],
                'original_language' => $movie['original_language'],
                'original_title' => $movie['original_title'],
                'description' => $movie['overview'],
                'popularity' => $movie['popularity'],
                'poster_url' => Str::of('https://image.tmdb.org/t/p/w500')
                    ->append($movie['poster_path'])
                    ->toString(),
                'release_date' => $movie['release_date'],
                'title' => $movie['title'],
                'video' => $movie['video'] ?: null,
                'average_votes' => $movie['vote_average'],
                'votes' => $movie['vote_count'],
                'provider' => config('services.movies.provider')
            ];
        });

        return $response->toArray();
    }
}
