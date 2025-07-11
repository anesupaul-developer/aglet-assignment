<?php

namespace App\Http\Controllers;

use App\Http\Requests\FavouriteMovieRequest;
use App\Http\Resources\FavouriteMovieResource;
use App\Models\FavouriteMovie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function array_merge;
use function auth;
use function back;

class FavouriteMovieController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $search = $request->input('search') ?: null;

        $favouriteMovies = FavouriteMovie::with('movie')
            ->where('user_id', 1)
            ->when($search, function ($query, $search) {
                $query->whereHas('movie', function ($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                        ->orWhere('description', 'like', "%{$search}%")
                        ->orWhereHas('genres', function ($q2) use ($search) {
                            $q2->where('name', 'like', "%{$search}%");
                        });
                });
            })
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('FavouriteMovies', [
            'favouriteMovies' => FavouriteMovieResource::collection($favouriteMovies),
        ]);
    }

    public function store(FavouriteMovieRequest $favouriteMovieRequest): \Illuminate\Http\RedirectResponse
    {
        $data = $favouriteMovieRequest->validated();

        $data = array_merge($data, ['user_id' => 1]);

        FavouriteMovie::query()->updateOrCreate($data, $data);

        return back()->with('success', 'Movie added to favourites!');
    }

    public function destroy($id)
    {
        FavouriteMovie::query()
            ->where('movie_id', $id)
            ->where('user_id', 1)
            ->delete();

        return back()->with('success', 'Movie removed from favourites!');
    }
}
