<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieListingController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $search = $request->input('search') ?: null;

        $movies = Movie::with('genres')
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%")
                        ->orWhereHas('genres', function ($q2) use ($search) {
                            $q2->where('name', 'like', "%{$search}%");
                        });
                });
            })
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Movies', [
            'movies' => MovieResource::collection($movies),
        ]);
    }

    public function autocomplete(Request $request): \Illuminate\Http\JsonResponse
    {
        $query = $request->input('search');

        $results = Movie::query()->where('title', 'like', "%{$query}%")
            ->limit(10)
            ->pluck('title');

        return response()->json($results);
    }
}
