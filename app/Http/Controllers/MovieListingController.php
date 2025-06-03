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
            ],
            [
                'id' => 2,
                'title' => 'The Dark Knight',
                'year' => 2008,
                'genre' => ['Action', 'Crime', 'Drama'],
                'duration' => '2h 32m',
                'rating' => 9.0,
                'synopsis' => 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
                'cast' => ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
                'director' => 'Christopher Nolan',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ],
            [
                'id' => 3,
                'title' => 'Interstellar',
                'year' => 2014,
                'genre' => ['Adventure', 'Drama', 'Sci-Fi'],
                'duration' => '2h 49m',
                'rating' => 8.6,
                'synopsis' => 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
                'cast' => ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
                'director' => 'Christopher Nolan',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ],
            [
                'id' => 4,
                'title' => 'Pulp Fiction',
                'year' => 1994,
                'genre' => ['Crime', 'Drama'],
                'duration' => '2h 34m',
                'rating' => 8.9,
                'synopsis' => 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
                'cast' => ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
                'director' => 'Quentin Tarantino',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ],
            [
                'id' => 5,
                'title' => 'The Matrix',
                'year' => 1999,
                'genre' => ['Action', 'Sci-Fi'],
                'duration' => '2h 16m',
                'rating' => 8.7,
                'synopsis' => 'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
                'cast' => ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
                'director' => 'The Wachowskis',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ],
            [
                'id' => 6,
                'title' => 'Goodfellas',
                'year' => 1990,
                'genre' => ['Biography', 'Crime', 'Drama'],
                'duration' => '2h 26m',
                'rating' => 8.7,
                'synopsis' => 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
                'cast' => ['Robert De Niro', 'Ray Liotta', 'Joe Pesci', 'Lorraine Bracco'],
                'director' => 'Martin Scorsese',
                'poster' => 'https://www.jetblue.com/magnoliapublic/dam/ui-assets/imagery/info-assets/movies/2025/mar/Moana-2.jpg',
                'backdrop' => '/placeholder.svg?height=400&width=800',
            ],
        ];


        return Inertia::render('Movies', [
            'movies' => $movies
        ]);
    }
}
