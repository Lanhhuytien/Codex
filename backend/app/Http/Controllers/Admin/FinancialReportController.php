<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class FinancialReportController extends Controller
{
    public function revenue(Request $request)
    {
        $data = $request->validate([
            'period' => ['required', 'in:daily,monthly'],
        ]);

        $query = Order::where('status', 'COMPLETED');

        if ($data['period'] === 'daily') {
            $revenue = $query->selectRaw('DATE(created_at) as period, SUM(grand_total) as revenue')
                ->groupBy('period')
                ->orderBy('period', 'desc')
                ->get();
        } else {
            $revenue = $query->selectRaw('DATE_FORMAT(created_at, "%Y-%m") as period, SUM(grand_total) as revenue')
                ->groupBy('period')
                ->orderBy('period', 'desc')
                ->get();
        }

        return response()->json($revenue);
    }
}
