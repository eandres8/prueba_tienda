<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', 'ClientController@index')->name('users.all');

Route::get('/category', 'CategoryController@index')->name('category.all');
Route::post('/category', 'CategoryController@store')->name('category.new');
Route::get('/category/{id}', 'CategoryController@show')->name('category.detail');
Route::put('/category/{id}', 'CategoryController@update')->name('category.modified');
Route::delete('/category/{id}', 'CategoryController@destroy')->name('category.delete');

Route::get('/product', 'ProductController@index')->name('product.all');
Route::post('/product', 'ProductController@store')->name('product.new');
Route::get('/product/{id}', 'ProductController@show')->name('product.detail');
Route::put('/product/{id}', 'ProductController@update')->name('product.modified');
Route::delete('/product/{id}', 'ProductController@destroy')->name('product.delete');

Route::get('/order', 'OrderController@index')->name('order.all');
Route::post('/order', 'OrderController@store')->name('order.new');
Route::get('/order/{id}', 'OrderController@show')->name('order.detail');
Route::put('/order/{id}', 'OrderController@update')->name('order.modified');
Route::delete('/order/{id}', 'OrderController@destroy')->name('order.delete');
