import React from 'react';
import { categories } from '../data/products';
import { Link } from 'react-router-dom';
import { Smartphone, Sparkles, Cpu, Palette, Zap, Headphones } from 'lucide-react';

const icons = {
  smartphone: Smartphone,
  sparkles: Sparkles,
  cpu: Cpu,
  palette: Palette,
  zap: Zap,
  headphones: Headphones,
};

function CategoryGrid() {
  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="section-title">Danh mục nổi bật</h2>
          <p className="section-subtitle">Khám phá nhanh các thương hiệu được yêu thích tại Huy Tiến Store.</p>
        </div>
        <Link to="/category/iphone" className="text-primary-600 font-semibold hover:text-primary-700">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = icons[category.icon];
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="card group text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryGrid;
