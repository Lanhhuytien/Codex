import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency, setMeta } from '../utils/format';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const related = useMemo(() => products.filter((p) => product?.related?.includes(p.id)), [product]);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(product?.capacity);

  useEffect(() => {
    if (product) {
      setMeta(product.name, product.description);
      setSelectedColor(product.colors?.[0]);
      setSelectedCapacity(product.capacity);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-gray-100 rounded-2xl p-5">
        <div className="flex flex-col gap-3">
          <img src={product.image} alt={product.name} className="w-full max-h-96 object-contain rounded-xl bg-smoke p-4" />
          <div className="flex gap-2 overflow-x-auto">
            {product.colors?.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-2 rounded-lg border ${selectedColor === color ? 'border-primary text-primary' : 'border-gray-200'}`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/">Trang chủ</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <Link to="/category/phones">Điện thoại</Link>
          </div>
          <h1 className="text-2xl font-bold text-charcoal">{product.name}</h1>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-primary">{formatCurrency(product.salePrice)}</div>
            <div className="text-sm line-through text-gray-400">{formatCurrency(product.price)}</div>
            <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full font-semibold">-{product.discount}%</span>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-sm">Dung lượng</div>
            <div className="flex gap-2 flex-wrap">
              {[product.capacity, '512GB'].filter(Boolean).map((cap) => (
                <button
                  key={cap}
                  onClick={() => setSelectedCapacity(cap)}
                  className={`px-3 py-2 rounded-lg border ${selectedCapacity === cap ? 'border-primary text-primary' : 'border-gray-200'}`}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-smoke rounded-xl p-4 text-sm text-gray-700 space-y-2">
            <div className="font-semibold text-charcoal">Ưu đãi / Quà tặng</div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tặng eSim Data 1 năm</li>
              <li>Giảm thêm 500.000đ khi thanh toán qua ví điện tử</li>
              <li>Trả góp 0% qua thẻ tín dụng</li>
            </ul>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              className="btn-primary"
              onClick={() => addToCart(product, 1, { color: selectedColor, capacity: selectedCapacity })}
            >
              Mua ngay
            </button>
            <button
              className="btn-secondary"
              onClick={() => addToCart(product, 1, { color: selectedColor, capacity: selectedCapacity })}
            >
              Thêm vào giỏ hàng
            </button>
            <button className="btn-secondary border-dashed">Trả góp 0%</button>
          </div>
          <div>
            <div className="font-semibold mb-2 text-charcoal">Cấu hình nổi bật</div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {product.highlights?.map((item) => (
                <div key={item} className="bg-smoke rounded-lg px-3 py-2">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-charcoal">Sản phẩm liên quan</h3>
          <Link to="/category/phones" className="text-primary text-sm font-semibold">Xem tất cả</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={(item) => addToCart(item)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
