<?php

namespace App\Http\Controllers;

use App\Http\Resources\FavouriteMovieResource;
use App\Models\FavouriteMovie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactMeController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        return Inertia::render('ContactMe', [
            'name' => 'Anesu Paul Ngirande',
        ]);
    }
}
