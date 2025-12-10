import React from 'react';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { items, summary } = useCart();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">Thanh toán</h1>
      <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
        <form className="bg-white rounded-2xl border p-6 space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Thông tin khách hàng</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="border rounded-lg px-3 py-2" placeholder="Họ tên" required />
              <input className="border rounded-lg px-3 py-2" placeholder="Số điện thoại" required />
              <input className="border rounded-lg px-3 py-2" placeholder="Email" type="email" />
              <input className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="Địa chỉ nhận hàng" required />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Phương thức thanh toán</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked /> COD (Thanh toán khi nhận hàng)
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Chuyển khoản ngân hàng
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Ví điện tử (Momo, ZaloPay)
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Đặt hàng</button>
        </form>
        <div className="bg-white rounded-2xl border p-6 space-y-4 h-fit">
          <h3 className="text-lg font-bold">Tóm tắt đơn hàng</h3>
          <div className="space-y-3 text-sm">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
              </div>
            ))}
          </div>
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
          <div className="bg-primary-50 text-primary-700 p-3 rounded-lg text-sm">Đặt hàng thành công tại Huy Tiến Store</div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
