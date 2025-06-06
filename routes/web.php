<?php

use App\Http\Controllers\ContactMeController;
use App\Http\Controllers\FavouriteMovieController;
use App\Http\Controllers\MovieListingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->to('/movies');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/favourite-movies', [FavouriteMovieController::class, 'store'])->name('favourite-movies.store');

Route::get('/movies', [MovieListingController::class, 'index'])->name('movies.index');

Route::get('/movies/autocomplete', [MovieListingController::class, 'autocomplete'])
    ->name('movie-listing.autocomplete');

Route::middleware('auth')->group(function () {
    Route::get('/contact-me', [ContactMeController::class, 'index'])->name('contactme.index');

    Route::controller(FavouriteMovieController::class)->group(function () {
        Route::get('/favourite-movies', 'index')->name('favourite-movies.index');
        Route::delete('/favourite-movies/{id}', 'destroy')->name('favourite-movies.destroy');
    });
});

require __DIR__.'/auth.php';
