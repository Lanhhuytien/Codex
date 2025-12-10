import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totals } = useCart()

  return (
    <div
      className={`fixed inset-0 z-40 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Giỏ hàng</h3>
          <button onClick={onClose} aria-label="Đóng" className="text-gray-500 hover:text-primary">
            Đóng
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && <p className="text-gray-600">Giỏ hàng chưa có sản phẩm.</p>}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 border-b pb-3">
              <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover rounded-md" loading="lazy" />
              <div className="flex-1">
                <p className="font-semibold text-dark">{item.name}</p>
                <p className="text-sm text-primary font-semibold">{item.salePrice.toLocaleString('vi-VN')}₫</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-2 text-sm">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button className="text-sm text-red-500 ml-auto" onClick={() => removeItem(item.id)}>
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tạm tính</span>
            <span className="font-semibold text-dark">{totals.subtotal.toLocaleString('vi-VN')}₫</span>
          </div>
          {totals.savings > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Tiết kiệm</span>
              <span>-{totals.savings.toLocaleString('vi-VN')}₫</span>
            </div>
          )}
          <Link to="/gio-hang" className="button-primary block text-center" onClick={onClose}>
            Xem giỏ hàng
          </Link>
          <Link
            to="/thanh-toan"
            className="block text-center border border-primary text-primary font-semibold py-2 rounded-md hover:bg-primary hover:text-white transition"
            onClick={onClose}
          >
            Thanh toán
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
