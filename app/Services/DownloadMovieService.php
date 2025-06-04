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
        $raw = $this->movieSource->download();

        if (! empty($raw)) {
            $data = $this->movieSource->transform($raw);

            // In case of larger data sets

            collect($data)->chunk(1000)->each(function ($chunk) {
                Movie::query()->insert($chunk->toArray());
            });

            echo "Inserted ".count($data).' new records....'.PHP_EOL;

            return;
        }

        echo "No records fetched !".PHP_EOL;
    }
}
