<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Giovanni Trejo',
            'email' => 'gtaa7x@gmail.com',
            'password' => bcrypt('totalcontrol'),
            'role' => '0'
        ]);
        User::create([
            'name' => 'Alicia Martínez',
            'email' => 'admin1@gmail.com',
            'password' => bcrypt('admin_2021'),
            'role' => '0'
        ]);
        User::create([
            'name' => 'Giovanni Trejo',
            'email' => 'admin2@gmail.com',
            'password' => bcrypt('admin_2021'),
            'role' => '0'
        ]);
    }
}
