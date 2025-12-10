import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency, setMeta } from '../utils/format';

const Checkout = () => {
  const { items, totals } = useCart();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => setMeta('Thanh toán', 'Hoàn tất đơn hàng tại Huy Tiến Store'), []);

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <div className="text-4xl text-primary mb-4">✅</div>
        <h1 className="text-2xl font-bold text-charcoal mb-2">Đặt hàng thành công</h1>
        <p className="text-gray-600">Đơn hàng của bạn đã được ghi nhận tại Huy Tiến Store.</p>
        <Link to="/" className="btn-primary inline-block mt-4">Tiếp tục mua sắm</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-4 space-y-3">
        <h1 className="text-2xl font-bold text-charcoal mb-2">Thông tin giao hàng</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <input className="border rounded-lg px-3 py-2" placeholder="Họ tên" />
          <input className="border rounded-lg px-3 py-2" placeholder="Số điện thoại" />
          <input className="border rounded-lg px-3 py-2" placeholder="Email" />
          <input className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="Địa chỉ" />
        </div>
        <div className="pt-3">
          <h3 className="font-semibold text-charcoal mb-2">Phương thức thanh toán</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            {['COD', 'Chuyển khoản', 'Ví điện tử'].map((method) => (
              <label key={method} className="border rounded-lg px-3 py-2 flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked={method === 'COD'} />
                {method}
              </label>
            ))}
          </div>
        </div>
        <button className="btn-primary mt-3" onClick={() => setSubmitted(true)}>
          Đặt hàng
        </button>
      </div>
      <div className="bg-white border border-gray-100 rounded-xl p-4 h-fit">
        <h3 className="font-semibold text-charcoal mb-2">Tóm tắt đơn hàng</h3>
        <div className="space-y-2 text-sm">
          {items.map((item) => (
            <div key={`${item.id}-${item.selectedColor}-${item.selectedCapacity}`} className="flex justify-between">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span className="font-semibold">{formatCurrency(item.salePrice * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-base font-bold text-charcoal border-t pt-2 mt-3">
          <span>Tổng</span>
          <span>{formatCurrency(totals.subtotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
