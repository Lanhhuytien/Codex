import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { items, removeItem, updateQuantity, totals } = useCart()

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="section-title">Giỏ hàng của bạn</div>
      {items.length === 0 ? (
        <div className="card p-6 text-center">
          <p className="text-gray-600 mb-4">Chưa có sản phẩm nào trong giỏ hàng.</p>
          <Link to="/" className="button-primary inline-block">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card p-4 flex gap-4">
                <img src={item.thumbnail} alt={item.name} className="w-28 h-28 object-cover rounded-md" loading="lazy" />
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-semibold text-dark">{item.name}</p>
                      <p className="text-sm text-gray-600">Màu: {item.colors[0]} • Dung lượng: {item.storage}</p>
                    </div>
                    <button className="text-sm text-red-500" onClick={() => removeItem(item.id)}>
                      Xóa
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center border rounded">
                      <button className="px-3 py-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button className="px-3 py-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <div className="font-bold text-primary text-lg">
                      {(item.salePrice * item.quantity).toLocaleString('vi-VN')}₫
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card p-4 h-fit">
            <h3 className="font-semibold text-lg mb-3">Tóm tắt đơn hàng</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>{totals.subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
              {totals.savings > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Tiết kiệm</span>
                  <span>-{totals.savings.toLocaleString('vi-VN')}₫</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-dark">
                <span>Thành tiền</span>
                <span>{totals.subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
            <Link to="/thanh-toan" className="button-primary w-full block text-center mt-4">
              Thanh toán
            </Link>
            <Link to="/" className="text-sm text-center block text-primary font-semibold mt-2">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
