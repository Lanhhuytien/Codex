<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        $locale = $request->header('Accept-Language', 'en');
        $locale = in_array($locale, ['en', 'vi'], true) ? $locale : 'en';
        App::setLocale($locale);

        return $next($request);
    }
}
