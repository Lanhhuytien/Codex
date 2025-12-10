import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  const { id, name, price, salePrice, discount, badge, image, installment, exclusive } = product;

  return (
    <div className="card h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-52 object-cover rounded-xl" loading="lazy" />
        {discount && (
          <span className="absolute top-3 left-3 badge bg-white text-primary-600 shadow">-{discount}%</span>
        )}
        {exclusive && <span className="absolute top-3 right-3 badge">Độc quyền</span>}
      </div>
      <div className="flex-1 mt-4">
        <Link to={`/product/${id}`} className="font-semibold text-gray-900 hover:text-primary-600 line-clamp-2">
          {name}
        </Link>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-primary-600">{salePrice.toLocaleString('vi-VN')}đ</span>
          <span className="text-sm text-gray-500 line-through">{price.toLocaleString('vi-VN')}đ</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          {badge && <span className="badge">{badge}</span>}
          {installment && <span className="badge bg-green-50 text-green-700">Trả góp 0%</span>}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => onAdd?.(product)}
          className="btn btn-ghost text-sm w-full border-gray-200 hover:border-primary-500"
        >
          <ShoppingBag className="w-4 h-4 mr-2" /> Thêm giỏ
        </button>
        <Link
          to={`/product/${id}`}
          className="btn btn-primary text-sm w-full flex items-center justify-center gap-2"
        >
          <ArrowUpRight className="w-4 h-4" /> Mua ngay
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
