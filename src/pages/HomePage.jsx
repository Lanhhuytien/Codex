import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Benefits from '../components/Benefits';
import BlogSection from '../components/BlogSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function HomePage() {
  const featured = products.slice(0, 6);
  const { addToCart } = useCart();

  return (
    <div className="pt-6">
      <HeroCarousel />
      <CategoryGrid />
      <section className="my-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <p className="section-subtitle">Deal ngon mỗi ngày dành riêng cho bạn.</p>
          </div>
          <button className="text-primary-600 font-semibold hover:text-primary-700">Xem thêm</button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={() => addToCart({ ...product, variant: product.capacity[0], price: product.salePrice })} />
          ))}
        </div>
      </section>
      <Benefits />
      <BlogSection />
    </div>
  );
}

export default HomePage;
