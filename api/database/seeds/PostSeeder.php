<?php

use App\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Post::class, 20)->create();
        // Post::factory()->count(10)->create(); So funciona no laravel 8
    }
}
