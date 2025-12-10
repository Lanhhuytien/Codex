import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { items, totals, clear } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', payment: 'cod' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    clear()
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="card p-8 max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-3">Đặt hàng thành công!</h1>
          <p className="text-gray-600">Cảm ơn bạn đã mua sắm tại Huy Tiến Store.</p>
          <p className="text-gray-700 mt-2">Chúng tôi sẽ liên hệ để xác nhận đơn hàng ngay.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="section-title">Thanh toán</div>
      <div className="grid lg:grid-cols-3 gap-6">
        <form className="card p-4 space-y-4 lg:col-span-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">Họ tên</label>
            <input
              className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Số điện thoại</label>
              <input
                className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Địa chỉ</label>
            <input
              className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phương thức thanh toán</label>
            <div className="space-y-2">
              {[
                { value: 'cod', label: 'Thanh toán khi nhận hàng (COD)' },
                { value: 'bank', label: 'Chuyển khoản ngân hàng' },
                { value: 'wallet', label: 'Ví điện tử (Momo, ZaloPay)' },
              ].map((method) => (
                <label key={method.value} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    value={method.value}
                    checked={form.payment === method.value}
                    onChange={(e) => setForm({ ...form, payment: e.target.value })}
                    required
                  />
                  {method.label}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="button-primary w-full">
            Đặt hàng
          </button>
        </form>
        <div className="card p-4 h-fit">
          <h3 className="font-semibold text-lg mb-3">Đơn hàng</h3>
          <div className="space-y-3 text-sm text-gray-700">
            {items.length === 0 && <p>Chưa có sản phẩm trong giỏ.</p>}
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{(item.salePrice * item.quantity).toLocaleString('vi-VN')}₫</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-3 pt-3 flex justify-between font-semibold text-dark">
            <span>Tổng</span>
            <span>{totals.subtotal.toLocaleString('vi-VN')}₫</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
