<?php

namespace App\Contracts;

interface MovieSourceInterface
{
    public function genre(): void;
    public function download(): array;

    public function transform(mixed $payload): array;
}
