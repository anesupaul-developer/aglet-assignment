<?php

namespace App\Adapters;

use App\Contracts\MovieSourceInterface;
final class TmdbMovieAdapter implements MovieSourceInterface
{

    public function download(): array
    {
        return [];
    }

    public function transform(mixed $payload): array
    {
        return [];
    }
}
