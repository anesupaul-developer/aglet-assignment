<?php

namespace App\Providers;

use App\Adapters\TmdbMovieAdapter;
use App\Contracts\MovieSourceInterface;
use App\Models\Movie;
use App\Observers\MovieObserver;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $provider = config('services.movies.provider');

        $this->app->bind(MovieSourceInterface::class, function () use ($provider) {
            return match ($provider) {
                'tmdb' => new TmdbMovieAdapter
            };
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Movie::observe(MovieObserver::class);
    }
}
