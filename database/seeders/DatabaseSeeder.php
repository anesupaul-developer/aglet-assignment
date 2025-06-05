<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Team Aglet',
                'username' => 'jointheteam',
                'email' => 'jointheteam@aglet.co.za',
                'password' => '@TeamAglet',
            ],
        ];

        foreach ($users as $user) {
            $exists = User::query()
                ->where('email', $user['email'])
                ->orWhere('username', 'jointheteam')
                ->exists();

            if (! $exists) {
                User::query()->create($user);
            }
        }
    }
}
