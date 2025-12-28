<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderService
{
    public function createFromCart(Cart $cart, array $payload): Order
    {
        return DB::transaction(function () use ($cart, $payload) {
            $subtotal = 0;
            $discountTotal = 0;

            foreach ($cart->items as $item) {
                $price = $item->product->price;
                $salePrice = $item->product->sale_price ?? $price;
                $subtotal += $price * $item->quantity;
                $discountTotal += ($price - $salePrice) * $item->quantity;
            }

            $grandTotal = $subtotal - $discountTotal;

            $order = Order::create([
                'user_id' => $cart->user_id,
                'status' => 'CREATED',
                'subtotal' => $subtotal,
                'discount_total' => $discountTotal,
                'grand_total' => $grandTotal,
                'payment_status' => 'UNPAID',
                'shipping_address' => $payload['shipping_address'],
            ]);

            foreach ($cart->items as $item) {
                $price = $item->product->price;
                $salePrice = $item->product->sale_price ?? $price;
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'unit_price' => $price,
                    'sale_price' => $salePrice,
                    'line_total' => $salePrice * $item->quantity,
                ]);

                $item->product->decrement('stock', $item->quantity);
            }

            $cart->items()->delete();

            Log::info('Order created', ['order_id' => $order->id]);

            return $order;
        });
    }
}
