import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { setMeta } from '../utils/format';

const sorts = [
  { label: 'Giá tăng dần', value: 'price-asc' },
  { label: 'Giá giảm dần', value: 'price-desc' },
  { label: 'Mới nhất', value: 'newest' },
  { label: 'Bán chạy', value: 'bestseller' }
];

const Category = ({ searchTerm }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({ brand: [], capacity: [], badge: [], price: [] });
  const [sort, setSort] = useState('price-asc');

  useEffect(() => {
    const title = id && id !== 'phones' ? `Danh mục ${id}` : 'Điện thoại';
    setMeta(title, 'Danh sách sản phẩm chính hãng tại Huy Tiến Store');
  }, [id]);

  const filtered = useMemo(() => {
    return products
      .filter((p) => (id && id !== 'phones' ? p.category === id : p.category !== 'accessories'))
      .filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((p) => (filters.brand.length ? filters.brand.includes(p.brand) : true))
      .filter((p) => (filters.capacity.length ? filters.capacity.includes(p.capacity) : true))
      .filter((p) => (filters.badge.length ? filters.badge.includes(p.badge) : true))
      .filter((p) =>
        filters.price.length
          ? filters.price.some((range) => p.salePrice >= range.min && p.salePrice <= range.max)
          : true
      );
  }, [filters, searchTerm, id]);

  const sorted = useMemo(() => {
    switch (sort) {
      case 'price-desc':
        return [...filtered].sort((a, b) => b.salePrice - a.salePrice);
      case 'newest':
        return filtered;
      case 'bestseller':
        return filtered;
      default:
        return [...filtered].sort((a, b) => a.salePrice - b.salePrice);
    }
  }, [filtered, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4">
      <FilterSidebar filters={filters} onChange={setFilters} onReset={() => setFilters({ brand: [], capacity: [], badge: [], price: [] })} />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-bold text-charcoal">Điện thoại</h1>
            <p className="text-sm text-gray-500">Chọn lọc sản phẩm theo nhu cầu của bạn</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={(p) => addToCart(p)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
