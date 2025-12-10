import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash, Plus, Minus } from 'lucide-react';

function CartPage() {
  const { items, summary, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>
      <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
        <div className="space-y-4">
          {items.length === 0 && <p className="text-gray-600">Chưa có sản phẩm nào. <Link className="text-primary-600" to="/">Tiếp tục mua sắm</Link></p>}
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="bg-white rounded-2xl border p-4 flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.variant}</p>
                <div className="text-primary-600 font-bold">{item.price.toLocaleString('vi-VN')}đ</div>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 rounded border">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 rounded border">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id, item.variant)} className="text-gray-400 hover:text-red-500">
                <Trash className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border p-5 space-y-3 h-fit">
          <h3 className="text-lg font-bold">Tóm tắt đơn hàng</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tạm tính</span>
            <span>{summary.subtotal.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Phí giao hàng</span>
            <span>{summary.shipping.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Tổng</span>
            <span className="text-primary-600">{summary.total.toLocaleString('vi-VN')}đ</span>
          </div>
          <Link to="/checkout" className="btn btn-primary w-full text-center">Thanh toán</Link>
          <Link to="/" className="btn btn-ghost w-full text-center">Tiếp tục mua sắm</Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
