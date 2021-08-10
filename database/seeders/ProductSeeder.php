<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = Product::create([
            'product_name' => 'pantalón',
            'product_description' => 'pantalon azul marca Arizona',
            'price' => 70,
            'expense_id' => 1,
            'category_id' => 3,
            'gender' => 'Hombre',
            'size' => '30H x 30W',
            'color' => 'azul marino',
            'observations' => 'sin detalles',
            'url_post' => 'https://www.instagram.com/p/CRPz-sRrsOK/'
        ]);
        $product->images()->create(
            [
                'url' => 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            ]);
        $product->images()->create(
            [
                'url' => 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            ]);
        Product::create([
            'product_name' => 'blusa',
            'product_description' => 'blusa verde marca American Eagle',
            'price' => 40,
            'expense_id' => 2,
            'category_id' => 2,
            'gender' => 'Mujer',
            'size' => 'Extra chica (XS)',
            'color' => 'verde claro',
            'observations' => 'tiene un pequeño agujero cerca del cuello'
        ]);
        Product::create([
            'product_name' => 'bolsas de papel',
            'product_description' => 'bolsas de papel para las entregas',
            'amount' => 100,
            'price' => 60,
            'expense_id' => 3,
            'category_id' => 7,
        ]);
        Product::create([
            'product_name' => 'strickers',
            'product_description' => 'stikcers de aliens comprados en aliexpress',
            'amount' => 150,
            'price' => 163,
            'expense_id' => 4,
            'category_id' => 7,
        ]);
        Product::create([
            'product_name' => 'zarzamoras',
            'product_description' => 'plantas de zarzamoras',
            'amount' => 5,
            'price' => 25,
            'expense_id' => 5,
            'category_id' => 5,
        ]);
    }
}
