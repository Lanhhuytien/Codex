<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Services\AdminLogger;
use App\Services\OrderService;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::where('user_id', $request->user()->id)
            ->with('items')
            ->latest()
            ->get();

        return response()->json($orders);
    }

    public function show(Order $order, Request $request)
    {
        if ($order->user_id !== $request->user()->id) {
            return response()->json(['message' => __('auth.unauthorized')], 403);
        }

        $order->load('items');

        return response()->json($order);
    }

    public function checkout(Request $request, OrderService $service)
    {
        $data = $request->validate([
            'shipping_address' => ['required', 'string'],
        ]);

        $cart = Cart::firstOrCreate(['user_id' => $request->user()->id]);
        $cart->load('items.product');

        if ($cart->items->isEmpty()) {
            return response()->json(['message' => __('cart.empty')], 422);
        }

        $order = $service->createFromCart($cart, $data);

        return response()->json($order, 201);
    }

    public function adminIndex()
    {
        $orders = Order::with('items')->latest()->paginate(20);

        return response()->json($orders);
    }

    public function updateStatus(Request $request, Order $order, AdminLogger $logger)
    {
        $data = $request->validate([
            'status' => ['required', 'in:CREATED,CONFIRMED,SHIPPING,COMPLETED,CANCELLED'],
        ]);

        $order->update(['status' => $data['status']]);
        $logger->log('order_status_updated', ['order_id' => $order->id, 'status' => $data['status']]);

        return response()->json($order);
    }
}
