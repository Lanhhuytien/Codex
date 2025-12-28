<?php

namespace App\Services;

use App\Models\AdminLog;
use Illuminate\Support\Facades\Auth;

class AdminLogger
{
    public function log(string $action, array $payload = []): void
    {
        AdminLog::create([
            'user_id' => Auth::id(),
            'action' => $action,
            'payload' => $payload,
        ]);
    }
}
