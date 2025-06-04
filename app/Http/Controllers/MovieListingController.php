<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieListingController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $movies = [
            [
                'id' => 1,
                'title' => 'Inception',
                'year' => 2010,
                'genre' => ['Sci-Fi', 'Thriller'],
                'duration' => '2h 28m',
                'rating' => 8.8,
                'synopsis' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
                'cast' => ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy', 'Elliot Page'],
                'director' => 'Christopher Nolan',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ]
        ];

        return Inertia::render('Movies', [
            'movies' => $movies,
        ]);
    }
}
