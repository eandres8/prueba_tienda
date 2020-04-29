<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        Product::create([
            'category_id' => 1,
            'name' => 'Juego de escobas',
            'description' => 'Incluye escoba, recogedor, trapero',
            'price' => 20000
        ]);
        Product::create([
            'category_id' => 2,
            'name' => 'Sofa',
            'description' => 'Forrado en cuero negro',
            'price' => 1500000
        ]);
        Product::create([
            'category_id' => 3,
            'name' => 'TV 4K 50 pulgadas',
            'description' => 'Smart TV de última tecnología',
            'price' => 5200000
        ]);
        Product::create([
            'category_id' => 4,
            'name' => 'Taladro',
            'description' => 'De fácil manejo por su diseño',
            'price' => 80000
        ]);
    }
}
