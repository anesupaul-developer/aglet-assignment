<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('provider')->default('tmdb');
            $table->json('genre_ids')->nullable();
            $table->boolean('adult')->default(false);
            $table->string('backdrop_url')->nullable();
            $table->unsignedBigInteger('source_id')->nullable();
            $table->string('original_language')->nullable();
            $table->string('original_title')->nullable();
            $table->longText('description')->nullable();
            $table->float('popularity')->default(0);
            $table->string('poster_url')->nullable();
            $table->date('release_date')->nullable();
            $table->string('title')->nullable();
            $table->boolean('video')->nullable();
            $table->float('average_votes')->default(0);
            $table->integer('votes')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
