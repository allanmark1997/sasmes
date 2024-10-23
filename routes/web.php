<?php

use App\Http\Controllers\OfficeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UnitServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return redirect("login");
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('offices')->name('office.')->group(function () {
        Route::get('/offices_lists', [OfficeController::class, 'index'])->name('index');
        Route::post('/add_office', [OfficeController::class, 'store'])->name('store');
        Route::post('/update_office/{office}', [OfficeController::class, 'update'])->name('update');
        Route::delete('/delete_office/{office}', [OfficeController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('units')->name('unit.')->group(function () {
        Route::get('/unit_lists', [UnitController::class, 'index'])->name('index');
        Route::post('/add_unit', [UnitController::class, 'store'])->name('store');
        Route::post('/update_unit/{unit}', [UnitController::class, 'update'])->name('update');
        Route::delete('/delete_unit/{unit}', [UnitController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('unit_services')->name('unit_service.')->group(function () {
        Route::get('/unit_service_lists', [UnitServiceController::class, 'index'])->name('index');
        Route::post('/add_unit_service', [UnitServiceController::class, 'store'])->name('store');
        Route::post('/update_unit_service/{unitService}', [UnitServiceController::class, 'update'])->name('update');
        Route::put('/delete_unit_service/{unitService}', [UnitServiceController::class, 'status'])->name('status');
        Route::delete('/delete_unit_service/{unitService}', [UnitServiceController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('services')->name('service.')->group(function () {
        Route::get('/service_lists', [ServiceController::class, 'index'])->name('index');
        Route::post('/add_service', [ServiceController::class, 'store'])->name('store');
        Route::post('/update_service/{service}', [ServiceController::class, 'update'])->name('update');
        Route::delete('/delete_service/{service}', [ServiceController::class, 'destroy'])->name('destroy');
    });
});
