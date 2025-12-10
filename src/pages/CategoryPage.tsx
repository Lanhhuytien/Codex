import { useMemo, useState } from 'react';
import FilterSidebar, { Filters } from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import { priceRanges, products } from '../data/products';

const CategoryPage = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [sort, setSort] = useState('newest');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (filters.brand) result = result.filter((p) => p.brand === filters.brand);
    if (filters.price) {
      const range = priceRanges.find((r) => r.value === filters.price);
      if (range) result = result.filter((p) => p.salePrice ?? p.price >= range.min && (p.salePrice ?? p.price) <= range.max);
    }
    if (filters.onSale) result = result.filter((p) => Boolean(p.salePrice));

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case 'popular':
        result = result.reverse();
        break;
      default:
        break;
    }
    return result;
  }, [filters, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-secondary">Danh sách sản phẩm</h1>
            <p className="text-sm text-gray-600">Hiển thị {filteredProducts.length} sản phẩm</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
          >
            <option value="newest">Mới nhất</option>
            <option value="popular">Bán chạy</option>
            <option value="price-asc">Giá thấp đến cao</option>
            <option value="price-desc">Giá cao đến thấp</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
