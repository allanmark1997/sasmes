<?php

use App\Http\Controllers\AccessControlController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClientRecordsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UnitServiceController;
use App\Http\Controllers\UserController;
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
    // Route::get('/dashboard', function () {

    //     // return Inertia::render('Dashboard');
    // })->name('dashboard');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('evaluations')->name('evaluation_result.')->group(function () {
        Route::get('/evaluation_lists', [EvaluationController::class, 'results_index'])->name('index');
        Route::get('/comparison', [EvaluationController::class, 'comparison'])->name('comparison');
    });

    Route::prefix('offices')->name('office.')->group(function () {
        Route::get('/offices_lists', [OfficeController::class, 'index'])->name('index');
        Route::post('/add_office', [OfficeController::class, 'store'])->name('store');
        Route::post('/update_office/{office}', [OfficeController::class, 'update'])->name('update');
        Route::delete('/delete_office/{office}', [OfficeController::class, 'destroy'])->name('destroy');
        Route::put('/delete_office/{office}', [OfficeController::class, 'status'])->name('status');
    });

    Route::prefix('units')->name('unit.')->group(function () {
        Route::get('/unit_lists', [UnitController::class, 'index'])->name('index');
        Route::post('/add_unit', [UnitController::class, 'store'])->name('store');
        Route::post('/update_unit/{unit}', [UnitController::class, 'update'])->name('update');
        Route::delete('/delete_unit/{unit}', [UnitController::class, 'destroy'])->name('destroy');
        Route::put('/delete_unit/{unit}', [UnitController::class, 'status'])->name('status');
    });

    Route::prefix('unit_services')->name('unit_service.')->group(function () {
        Route::get('/unit_service_lists', [UnitServiceController::class, 'index'])->name('index');
        Route::post('/add_unit_service', [UnitServiceController::class, 'store'])->name('store');
        Route::put('/delete_unit_service/{unitService}', [UnitServiceController::class, 'status'])->name('status');
    });

    Route::prefix('services')->name('service.')->group(function () {
        Route::get('/service_lists', [ServiceController::class, 'index'])->name('index');
        Route::post('/add_service', [ServiceController::class, 'store'])->name('store');
        Route::post('/add_service_director', [ServiceController::class, 'store_director'])->name('store_director');
        Route::post('/update_service/{service}', [ServiceController::class, 'update'])->name('update');
        Route::delete('/delete_service/{service}', [ServiceController::class, 'destroy'])->name('destroy');
        Route::put('/delete_service/{service}', [ServiceController::class, 'status'])->name('status');
    });

    Route::prefix('clients')->name('client.')->group(function () {
        Route::get('/client_lists', [ClientController::class, 'index'])->name('index');
        Route::get('/client_details', [ClientController::class, 'index_details'])->name('index_details');
        Route::post('/add_client', [ClientController::class, 'store'])->name('store');
        Route::post('/update_client/{client}', [ClientController::class, 'update'])->name('update');
        Route::delete('/delete_client/{client}', [ClientController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('client_records')->name('record.')->group(function () {
        Route::get('/record_lists', [ClientRecordsController::class, 'index'])->name('index');
        Route::post('/add_record', [ClientRecordsController::class, 'store'])->name('store');
    });

    Route::prefix('users')->name('user.')->group(function () {
        Route::get('/user_lists', [UserController::class, 'index'])->name('index');
        Route::post('/add_user', [UserController::class, 'store'])->name('store');
        Route::put('/update_user/{user}', [UserController::class, 'update'])->name('update');
        Route::delete('/delete_user/{user}', [UserController::class, 'destroy'])->name('destroy');
        Route::put('/user_status/{user}', [UserController::class, 'status'])->name('status');
    });

    Route::prefix('access_control')->name('access.')->group(function () {
        Route::put('/add_access/{accessControl}', [AccessControlController::class, 'update'])->name('update');
    });
});

Route::prefix('engine')->name('evaluation.')->group(function () {
    Route::get('/evaluation/{code}', [EvaluationController::class, 'index'])->name('index');
    Route::put('/evaluation_update/{evaluation}', [EvaluationController::class, 'update'])->name('update');
});
