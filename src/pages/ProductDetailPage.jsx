import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function ProductDetailPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id) || products[0], [id]);
  const [color, setColor] = useState(product?.colors?.[0]);
  const [capacity, setCapacity] = useState(product?.capacity?.[0]);
  const { addToCart } = useCart();

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart({ ...product, variant: `${capacity} - ${color}`, price: product.salePrice });
  };

  return (
    <div className="py-10 space-y-10">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-card object-cover"
          />
          <div className="grid grid-cols-5 gap-3">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-20 object-cover rounded-xl border"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-green-600 font-semibold flex items-center gap-2 mt-2">Cam kết hàng chính hãng, mới 100%</p>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-primary-600">{product.salePrice.toLocaleString('vi-VN')}đ</span>
            <span className="text-lg text-gray-500 line-through">{product.price.toLocaleString('vi-VN')}đ</span>
            <span className="badge">-{product.discount}%</span>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold mb-2">Chọn dung lượng</p>
              <div className="flex gap-2 flex-wrap">
                {product.capacity.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setCapacity(cap)}
                    className={`px-4 py-2 rounded-lg border ${
                      capacity === cap ? 'border-primary-500 text-primary-600 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Chọn màu</p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 rounded-lg border ${
                      color === c ? 'border-primary-500 text-primary-600 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-4 space-y-2">
            <p className="font-semibold">Ưu đãi khi mua tại Huy Tiến Store</p>
            <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
              <li>Giảm thêm 300K khi thanh toán qua thẻ tín dụng</li>
              <li>Tặng phiếu mua phụ kiện 200K</li>
              <li>Hỗ trợ trả góp 0% qua 25 ngân hàng</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button className="btn btn-primary col-span-2" onClick={handleAdd}>Mua ngay</button>
            <button className="btn btn-ghost" onClick={handleAdd}>Thêm giỏ</button>
          </div>
          <div className="bg-white rounded-2xl border p-4 space-y-3">
            <h3 className="font-semibold">Thông tin chi tiết</h3>
            <p className="text-gray-600 text-sm">
              Trang bị chip hiệu năng mạnh, camera đỉnh cao, màn hình sắc nét. Bảo hành chính hãng 12 tháng, đổi mới 30 ngày nếu lỗi.
            </p>
            <div className="grid grid-cols-2 text-sm text-gray-700 gap-2">
              <span>RAM: 8GB</span>
              <span>Pin: 4500 mAh</span>
              <span>Màn hình: 6.7 inch OLED</span>
              <span>Hỗ trợ 5G</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title mb-0">Sản phẩm liên quan</h2>
          <Link to={`/category/${product.category}`} className="text-primary-600 font-semibold">Xem thêm</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {related.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAdd={() => addToCart({ ...item, variant: item.capacity[0], price: item.salePrice })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
