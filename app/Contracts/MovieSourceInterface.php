<?php

namespace App\Contracts;

interface MovieSourceInterface
{
    public function download(): array;

    public function transform(mixed $payload): array;
}
