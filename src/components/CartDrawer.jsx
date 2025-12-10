import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQuantity, summary } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-bold">Giỏ hàng ({summary.count})</h3>
          <button onClick={onClose} aria-label="Đóng" className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 space-y-4 overflow-y-auto h-[70vh]">
          {items.length === 0 && <p className="text-gray-600">Chưa có sản phẩm trong giỏ.</p>}
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-3 border rounded-xl p-3">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.variant}</p>
                <div className="text-primary-600 font-bold">{item.price.toLocaleString('vi-VN')}đ</div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                    className="p-1 rounded border"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                    className="p-1 rounded border"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id, item.variant)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="p-5 border-t space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tạm tính</span>
            <span>{summary.subtotal.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Phí giao hàng</span>
            <span>{summary.shipping.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Tổng</span>
            <span className="text-primary-600">{summary.total.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={onClose} className="btn btn-ghost">Tiếp tục mua</button>
            <Link to="/checkout" className="btn btn-primary text-center" onClick={onClose}>
              Thanh toán
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CartDrawer;
