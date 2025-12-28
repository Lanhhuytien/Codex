<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function show(Request $request)
    {
        $cart = Cart::firstOrCreate(['user_id' => $request->user()->id]);
        $cart->load('items.product.translations', 'items.product.images');

        return response()->json($cart);
    }

    public function addItem(Request $request)
    {
        $data = $request->validate([
            'product_id' => ['required', 'integer', 'exists:products,id'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        $product = Product::findOrFail($data['product_id']);
        if ($product->stock < $data['quantity']) {
            return response()->json(['message' => __('cart.out_of_stock')], 422);
        }

        $cart = Cart::firstOrCreate(['user_id' => $request->user()->id]);
        $item = CartItem::updateOrCreate(
            ['cart_id' => $cart->id, 'product_id' => $product->id],
            ['quantity' => $data['quantity']]
        );

        return response()->json($item, 201);
    }

    public function updateItem(Request $request, CartItem $item)
    {
        $data = $request->validate([
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        if ($item->product->stock < $data['quantity']) {
            return response()->json(['message' => __('cart.out_of_stock')], 422);
        }

        $item->update(['quantity' => $data['quantity']]);

        return response()->json($item);
    }

    public function removeItem(CartItem $item)
    {
        $item->delete();

        return response()->json(['message' => __('cart.removed')]);
    }
}
