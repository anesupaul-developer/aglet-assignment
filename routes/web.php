<?php

use App\Http\Controllers\FavouriteMovieController;
use App\Http\Controllers\MovieListingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->to('/login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/movies', [MovieListingController::class, 'index'])->name('movies.index');

    Route::get('/movies/autocomplete', [MovieListingController::class, 'autocomplete'])
        ->name('movie-listing.autocomplete');

    Route::controller(FavouriteMovieController::class)->group(function () {
        Route::get('/favourite-movies', 'index')->name('favourite-movies.index');
        Route::post('/favourite-movies', 'store')->name('favourite-movies.store');
        Route::delete('/favourite-movies/{id}', 'destroy')->name('favourite-movies.destroy');
    });
});

require __DIR__.'/auth.php';
