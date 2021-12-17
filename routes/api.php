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
Route::post('/register','Auth\RegisterController@register');
Route::get('/post','PostController@index');
Route::get('/post/{post}/comments','CommentController@index');

Route::post('/login','Auth\LoginController@authenticate');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/post/{post}/comment','CommentController@store');
    Route::delete('/comment/{comment}', 'CommentController@destroy');
});
