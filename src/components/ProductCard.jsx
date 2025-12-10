import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const ProductCard = ({ product, onAdd }) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-3 card-hover">
    <div className="flex justify-between items-start">
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">{product.badge}</span>
      {product.discount && (
        <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full font-semibold">
          -{product.discount}%
        </span>
      )}
    </div>
    <Link to={`/product/${product.id}`} className="flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-36 object-contain"
        loading="lazy"
      />
    </Link>
    <div className="flex-1 flex flex-col gap-1">
      <Link to={`/product/${product.id}`} className="font-semibold text-charcoal hover:text-primary leading-tight">
        {product.name}
      </Link>
      <div className="text-sm text-gray-500">{product.capacity}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-primary">{formatCurrency(product.salePrice)}</span>
        <span className="text-sm line-through text-gray-400">{formatCurrency(product.price)}</span>
      </div>
      {product.installment && (
        <div className="text-xs text-green-600 font-semibold">Trả góp 0% qua thẻ</div>
      )}
    </div>
    <div className="flex gap-2">
      <button onClick={() => onAdd(product)} className="btn-secondary flex-1">Thêm vào giỏ</button>
      <Link to={`/product/${product.id}`} className="btn-primary flex-1 text-center">
        Mua ngay
      </Link>
    </div>
  </div>
);

export default ProductCard;
