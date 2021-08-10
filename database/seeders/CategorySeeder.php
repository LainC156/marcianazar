<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cat1 = new Category();
        $cat1->category_name = 'Ropa';
        $cat1->category_description = 'toda la ropa va aquí';
        $cat1->save();

        $cat2 = new Category();
        $cat2->category_name = 'Blusas';
        $cat2->category_description = 'es una subcategoría de Ropa';
        $cat2->parent()->associate($cat1->id);
        $cat2->save();

        $cat_p = new Category();
        $cat_p->category_name = 'Pantalones';
        $cat_p->category_description = 'es una subcategoría de Ropa';
        $cat_p->parent()->associate($cat1->id);
        $cat_p->save();

        $cat3 = new Category();
        $cat3->category_name = 'Plantas';
        $cat3->category_description = 'todas las plantas van aquí';
        $cat3->save();

        $cat4 = new Category();
        $cat4->category_name = 'Zarzamora';
        $cat4->category_description = 'es una subcategoría de plantas';
        $cat4->parent()->associate($cat3->id);
        $cat4->save();
       
        $cat5 = new Category();
        $cat5->category_name = 'Gastos';
        $cat5->category_description = 'todas los gastos van aquí';
        $cat5->save();

        $cat6 = new Category();
        $cat6->category_name = 'Papeleria';
        $cat6->category_description = 'es una subcategoría de gastos';
        $cat6->parent()->associate($cat5->id);
        $cat6->save();

        $cat7 = new Category();
        $cat7->category_name = 'Transporte';
        $cat7->category_description = 'es una subcategoría de gastos';
        $cat7->parent()->associate($cat5->id);
        $cat7->save();
    }
}
