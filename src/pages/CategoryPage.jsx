import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const filters = {
  brand: ['iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'Realme'],
  price: ['Dưới 10 triệu', '10 - 20 triệu', 'Trên 20 triệu'],
  storage: ['128GB', '256GB', '512GB'],
  promotion: ['Trả góp 0%', 'Giảm sốc', 'Độc quyền'],
};

function CategoryPage() {
  const { id } = useParams();
  const [sort, setSort] = useState('new');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let list = products.filter((item) => (id && id !== 'search' ? item.category === id : true));
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.salePrice - b.salePrice);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.salePrice - a.salePrice);
    return list;
  }, [id, sort]);

  return (
    <div className="grid lg:grid-cols-[260px,1fr] gap-8 py-8">
      <aside className="bg-white rounded-2xl border border-gray-100 p-5 h-fit space-y-5">
        <h2 className="text-lg font-bold">Bộ lọc</h2>
        {Object.entries(filters).map(([key, values]) => (
          <div key={key} className="space-y-2">
            <h4 className="font-semibold capitalize">{key}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              {values.map((value) => (
                <label key={value} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-primary-500" />
                  {value}
                </label>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <section>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">{id || 'Sản phẩm'}</h1>
            <p className="text-gray-600">Tìm thấy {filteredProducts.length} sản phẩm.</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="new">Mới nhất</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => addToCart({ ...product, variant: product.capacity[0], price: product.salePrice })}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;
