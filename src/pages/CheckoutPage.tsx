import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const CheckoutPage = () => {
  const { state, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const subtotal = state.items.reduce((sum, item) => sum + (item.salePrice ?? item.price) * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center bg-white rounded-2xl mt-8 shadow-card">
        <h1 className="text-2xl font-semibold text-secondary mb-3">Đặt hàng thành công!</h1>
        <p className="text-gray-600">Cảm ơn bạn đã mua sắm tại Huy Tiến Store.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <form className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 lg:col-span-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-secondary">Thanh toán</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required placeholder="Họ tên" className="border border-gray-200 rounded-lg px-3 py-2" />
          <input required placeholder="Số điện thoại" className="border border-gray-200 rounded-lg px-3 py-2" />
          <input type="email" placeholder="Email" className="border border-gray-200 rounded-lg px-3 py-2" />
          <input required placeholder="Địa chỉ" className="border border-gray-200 rounded-lg px-3 py-2 sm:col-span-2" />
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Phương thức thanh toán</p>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="payment" defaultChecked className="accent-primary" />
            Thanh toán khi nhận hàng (COD)
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="payment" className="accent-primary" />
            Chuyển khoản ngân hàng
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="payment" className="accent-primary" />
            Ví điện tử (Momo, ZaloPay)
          </label>
        </div>

        <button type="submit" className="w-full bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-orange-500">
          Đặt hàng
        </button>
      </form>

      <div className="bg-white rounded-xl border border-gray-100 p-6 h-fit">
        <h3 className="font-semibold text-secondary mb-3">Tóm tắt đơn hàng</h3>
        <div className="space-y-3 text-sm text-gray-700">
          {state.items.length === 0 && <p>Giỏ hàng trống.</p>}
          {state.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{formatCurrency((item.salePrice ?? item.price) * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-lg font-bold text-secondary mt-4">
          <span>Tổng</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
