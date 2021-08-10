<?php

namespace Database\Seeders;

use App\Models\Expense;
use Illuminate\Database\Seeder;

class ExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Expense::create([
            'name' => 'pantalón',
            'description' => 'pantalon azul marca Arizona',
            'price'=> 70
        ]);
        Expense::create([
            'name' => 'blusa',
            'description' => 'blusa verde marca American Eagle',
            'price'=> 40
        ]);
        Expense::create([
            'name' => 'bolsas de papel',
            'description' => 'bolsas de papel para las entregas',
            'amount' => 100,
            'price'=> 60
        ]);
        Expense::create([
            'name' => 'strickers',
            'description' => 'stikcers de aliens comprados en aliexpress',
            'amount' => 150,
            'price'=> 163
        ]);
        Expense::create([
            'name' => 'zarzamoras',
            'description' => 'plantas de zarzamoras',
            'amount' => 5,
            'price'=> 25
        ]);        
    }
}
