<?php

namespace App\Providers;

use App\Actions\Jetstream\DeleteUser;
use App\Models\User;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Laravel\Jetstream\Jetstream;

class JetstreamServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configurePermissions();

        Jetstream::deleteUsersUsing(DeleteUser::class);

        Vite::prefetch(concurrency: 3);

        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->email)->with("access_control")->first();
            if ($user == null) {
                throw ValidationException::withMessages([
                    'custom' => "Sorry! looks like the email you entered is not in the system",
                ]);
            } else {
                try {
                    if (strlen($request->password) < 8) {
                        throw ValidationException::withMessages([
                            'custom' => "Password minimum is 8 characters",
                        ]);
                    } else if (Hash::check($request->password, $user->password)) {
                        if ($user->status == 0) {
                            throw ValidationException::withMessages([
                                'custom' => "Sorry! Your account has been deactivated by the administrator.",
                            ]);
                        } 
                        // elseif ($user->type == 2) {
                        //     throw ValidationException::withMessages([
                        //         'custom' => "Sorry! Cashier account cannot access this.",
                        //     ]);
                        // } 
                        else {
                            return $user;
                        }
                    } else {
                        throw ValidationException::withMessages([
                            'custom' => "Opps! wrong password",
                        ]);
                    }
                } catch (DecryptException $e) {
                    throw ValidationException::withMessages([
                        'custom' => "Opps! These credentials do not match our records.",
                    ]);
                }
            }
        });
    }

    /**
     * Configure the permissions that are available within the application.
     */
    protected function configurePermissions(): void
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::permissions([
            'create',
            'read',
            'update',
            'delete',
        ]);
    }
}
