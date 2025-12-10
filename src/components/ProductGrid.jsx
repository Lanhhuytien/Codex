import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAdd, title, action }) => (
  <section className="max-w-6xl mx-auto px-4 py-6">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold text-charcoal">{title}</h2>
        <p className="text-sm text-gray-500">Khuyến mãi, trả góp 0% cho nhiều sản phẩm</p>
      </div>
      {action}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
