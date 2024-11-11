<!DOCTYPE html>
<html lang="en">
<body>
    <p></p>
    <h1>env('APP_NAME')</h1>
    <h3>Dear {{$name}},</h3>
    <p>
        As you requested in admin to reset, here's your new credentials
    </p>
    <p>
        Your email: {{$email}}
    </p>
    <p>
        Your password: {{$password}}
    </p>
    <p>
        If you are interested, you can redirect here
    </p>
    <p>
    @component('mail::button', ['url' => env('APP_URL')])
       <h2> Visit site </h2>
    @endcomponent
    </p>
    <p>Thanks,</p>
    <p>
    {{ config('app.name') }}
    </p>
</body>
</html>