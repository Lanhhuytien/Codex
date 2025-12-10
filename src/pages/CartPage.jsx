import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency, setMeta } from '../utils/format';

const CartPage = () => {
  const { items, totals, removeFromCart, updateQuantity } = useCart();

  useEffect(() => setMeta('Giỏ hàng', 'Kiểm tra giỏ hàng tại Huy Tiến Store'), []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-charcoal mb-4">Giỏ hàng của bạn</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-3">
          {items.length === 0 && <p className="text-gray-500 text-sm">Chưa có sản phẩm.</p>}
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedCapacity}`} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
              <div className="flex-1 space-y-1">
                <div className="font-semibold text-charcoal">{item.name}</div>
                <div className="text-xs text-gray-500">
                  {item.selectedColor || item.colors?.[0]} • {item.selectedCapacity || item.capacity}
                </div>
                <div className="text-primary font-bold">{formatCurrency(item.salePrice)}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="w-7 h-7 border rounded"
                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedCapacity, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                  <button
                    className="w-7 h-7 border rounded"
                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedCapacity, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-auto text-sm text-red-500"
                    onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedCapacity)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4 h-fit">
          <h3 className="font-semibold text-charcoal mb-2">Tóm tắt đơn hàng</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Tạm tính</span>
            <span className="font-semibold">{formatCurrency(totals.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Phí vận chuyển</span>
            <span className="font-semibold">Miễn phí</span>
          </div>
          <div className="flex justify-between text-base font-bold text-charcoal border-t pt-2 mt-2">
            <span>Tổng</span>
            <span>{formatCurrency(totals.subtotal)}</span>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Link to="/checkout" className="btn-primary text-center">
              Thanh toán
            </Link>
            <Link to="/" className="btn-secondary text-center">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
