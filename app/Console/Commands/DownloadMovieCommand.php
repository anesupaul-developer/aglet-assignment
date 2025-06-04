<?php

namespace App\Console\Commands;

use App\Services\DownloadMovieService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class DownloadMovieCommand extends Command
{
    public function __construct(protected DownloadMovieService $downloadMovieService)
    {
        parent::__construct();
    }

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:download-movie';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Consume movie api and save results to database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        echo 'Start downloading movies ...'.PHP_EOL;

        try {
            $this->downloadMovieService->download();
        } catch (\Exception $exception) {
            $this->error($exception->getMessage());
            Log::error('Movie download failed', [
                'message' => $exception->getMessage(),
                'trace' => $exception->getTraceAsString(),
            ]);
        }
    }
}
