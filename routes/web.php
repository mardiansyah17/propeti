<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropetiController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/propeties', [PropetiController::class, 'index'])->name('propeties.index');

Route::get('/propeties/{id}', [PropetiController::class, 'show'])->name('propeties.show');

Route::middleware('auth')->group(function () {
    Route::get('/propeties-delete/{id}', [PropetiController::class, 'delete'])->name('propeties.delete');
    Route::get('/my-propeti', [PropetiController::class, 'myPropeti'])->name('my-propeti');
    Route::get('/post-propeti', [PropetiController::class, 'create'])->name('propeties.create');
    Route::post('/propeties/create', [PropetiController::class, 'store'])->name('propeties.store');
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
