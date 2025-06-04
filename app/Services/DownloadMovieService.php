<?php

namespace App\Services;

use App\Contracts\MovieSourceInterface;
use App\Models\Movie;
use function count;
use const PHP_EOL;

final class DownloadMovieService
{
    public function __construct(protected MovieSourceInterface $movieSource) {}

    public function download(): void
    {
        $this->movieSource->genre();

        $raw = $this->movieSource->download();

        if (! empty($raw)) {
            $movies = $this->movieSource->transform($raw);

            // Should have used bulk insert but since I am listening to events have to use create
            foreach($movies as $movie) {
                Movie::query()->updateOrCreate([
                    'provider' => $movie['provider'],
                    'source_id' => $movie['source_id']
                ],$movie);
            }

            echo "Inserted ".count($movies).' new records....'.PHP_EOL;

            return;
        }

        echo "No records fetched !".PHP_EOL;
    }
}
