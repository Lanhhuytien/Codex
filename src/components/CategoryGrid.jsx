import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryGrid = () => (
  <section className="max-w-6xl mx-auto px-4 py-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-charcoal">Danh mục nổi bật</h2>
      <Link to="/category/phones" className="text-primary text-sm font-semibold">
        Xem tất cả
      </Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {categories.map((cat) => (
        <Link
          to={`/category/${cat.id}`}
          key={cat.id}
          className="card-hover bg-white border border-gray-100 p-4 rounded-xl text-center flex flex-col items-center gap-2"
        >
          <div className="text-2xl">{cat.icon}</div>
          <div className="font-semibold text-sm">{cat.name}</div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
