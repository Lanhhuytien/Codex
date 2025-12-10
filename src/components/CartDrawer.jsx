import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const CartDrawer = () => {
  const { items, totals, removeFromCart, updateQuantity, open, setOpen } = useCart();

  return (
    <div className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl p-4 flex flex-col transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-charcoal">Giỏ hàng</h3>
          <button onClick={() => setOpen(false)} className="text-gray-500">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3">
          {items.length === 0 && <p className="text-gray-500 text-sm">Chưa có sản phẩm.</p>}
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedCapacity}`} className="flex gap-3 border border-gray-100 rounded-xl p-3">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <div className="font-semibold text-sm text-charcoal">{item.name}</div>
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
        <div className="pt-4 border-t border-gray-100 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tạm tính</span>
            <span className="font-semibold text-charcoal">{formatCurrency(totals.subtotal)}</span>
          </div>
          <div className="flex gap-3">
            <Link to="/cart" className="btn-secondary flex-1 text-center" onClick={() => setOpen(false)}>
              Xem giỏ hàng
            </Link>
            <Link to="/checkout" className="btn-primary flex-1 text-center" onClick={() => setOpen(false)}>
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
