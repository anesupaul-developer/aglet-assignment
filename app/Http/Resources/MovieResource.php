<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'is_favourite' => $this->isFavourite(),
            'date' => Carbon::parse($this->release_date)->format('d M Y'),
            'year' => Carbon::parse($this->release_date)->format('Y'),
            'genre' => collect($this->genres)->pluck('name')->toArray(),
            'duration' => '2h 28m',
            'rating' => rand(1.0, 9.9),
            'synopsis' => $this->description,
            'cast' => [],
            'director' => '',
            'poster' => $this->poster_url,
            'backdrop' => $this->backdrop_url,
        ];
    }
}
