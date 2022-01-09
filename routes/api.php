<?php

use App\Models\User;
use App\Models\Test;
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

Route::get('/user', function (Request $request) {
	return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {

	Route::get('/users', function (Request $request) {
		$users = User::all();
		return response()->json($users);
	});

	Route::get('/tests', function (Request $request) {
		$users = Test::all();
		return response()->json($users);
	});

	Route::get('/tests-tree', function (Request $request) {
		$tests = Test::with('test')

			->get();
		return response()->json($tests);
	});

});



