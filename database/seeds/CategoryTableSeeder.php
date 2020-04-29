<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();
        Category::create([
            'name' => 'Aseo',
            'description' => 'Productos para el aseo del hogar'
        ]);
        Category::create([
            'name' => 'Muebles',
            'description' => 'Muebles en diferentes materiales'
        ]);
        Category::create([
            'name' => 'Electrodomesticos',
            'description' => 'Todo tipo de electrodomésticos'
        ]);
        Category::create([
            'name' => 'Herramientas',
            'description' => 'Gran variedad de Herramientas'
        ]);
    }
}
