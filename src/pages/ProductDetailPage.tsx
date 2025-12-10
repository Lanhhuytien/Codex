import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { formatCurrency } from '../utils/format';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) ?? products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-card">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-xl" />
          <div className="flex gap-3 mt-4 overflow-auto scrollbar-thin">
            {[product.image, ...related.map((r) => r.image)].slice(0, 4).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={product.name}
                className="w-24 h-20 object-cover rounded-lg border border-gray-100"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h1 className="text-2xl font-semibold text-secondary">{product.name}</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">{formatCurrency(product.salePrice ?? product.price)}</span>
            {product.salePrice && <span className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</span>}
            {product.discount && <span className="text-sm text-primary font-semibold">-{product.discount}%</span>}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center text-sm">
              <span className="font-semibold">Dung lượng:</span>
              {product.capacities?.map((cap) => (
                <button key={cap} className="px-3 py-1 rounded-lg border border-gray-200 hover:border-primary">
                  {cap}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center text-sm">
              <span className="font-semibold">Màu sắc:</span>
              {product.colors?.map((color) => (
                <button key={color} className="px-3 py-1 rounded-lg border border-gray-200 hover:border-primary">
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm text-secondary">
            <p className="font-semibold mb-2">Khuyến mãi</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tặng voucher 300K mua phụ kiện</li>
              <li>Miễn phí giao hàng nội thành</li>
              <li>Hỗ trợ trả góp 0% qua thẻ</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-primary text-secondary font-semibold rounded-lg py-3 hover:bg-orange-500"
            >
              Thêm vào giỏ
            </button>
            <button className="flex-1 border border-primary text-primary font-semibold rounded-lg py-3">
              Trả góp 0%
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-secondary">Sản phẩm liên quan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
