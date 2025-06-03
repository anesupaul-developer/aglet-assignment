<?php

namespace App\Services;

use App\Contracts\MovieSourceInterface;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;

final class DownloadMovieService
{
    public function __construct(public MovieSourceInterface $movieSource)
    {
    }

    public function download(): void
    {
        $raw = $this->movieSource->download();

        if (! empty($raw)) {
            $data = $this->movieSource->transform($raw);

            collect($data)->chunk(1000)->each(function ($chunk) {
                Movie::query()->insert($chunk->toArray());
            });
        }
    }
}
