import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import BenefitSection from '../components/BenefitSection';
import BlogSection from '../components/BlogSection';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { setMeta } from '../utils/format';

const Home = ({ searchTerm }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    setMeta('Trang chủ', 'Mua điện thoại chính hãng, giao nhanh trong ngày tại Huy Tiến Store');
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <HeroBanner />
      <CategoryGrid />
      <ProductGrid
        title="Sản phẩm nổi bật"
        products={filtered.slice(0, 8)}
        onAdd={(p) => addToCart(p)}
        action={<button className="btn-secondary">Xem thêm</button>}
      />
      <BenefitSection />
      <BlogSection />
    </main>
  );
};

export default Home;
