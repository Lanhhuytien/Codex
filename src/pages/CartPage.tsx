import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

const CartPage = () => {
  const { state, removeFromCart, updateQuantity } = useCart();
  const subtotal = state.items.reduce((sum, item) => sum + (item.salePrice ?? item.price) * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-secondary mb-6">Giỏ hàng</h1>
      {state.items.length === 0 ? (
        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
          <p className="text-gray-600">Chưa có sản phẩm nào trong giỏ.</p>
          <Link to="/category/phone" className="text-primary font-semibold mt-3 inline-block">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-24 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary">{item.name}</h3>
                  <p className="text-sm text-gray-600">{formatCurrency(item.salePrice ?? item.price)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                    <button className="text-primary text-sm" onClick={() => removeFromCart(item.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="font-semibold text-secondary">
                  {formatCurrency((item.salePrice ?? item.price) * item.quantity)}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 h-fit">
            <h3 className="font-semibold text-secondary mb-3">Tóm tắt đơn hàng</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tạm tính</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Phí giao hàng</span>
              <span>Miễn phí</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-secondary mt-3">
              <span>Tổng</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center mt-4 bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-orange-500"
            >
              Thanh toán
            </Link>
            <Link to="/category/phone" className="block text-center mt-3 text-primary">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
