import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import BenefitsSection from '../components/BenefitsSection';
import BlogSection from '../components/BlogSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  const featured = products.slice(0, 6);
  return (
    <div className="space-y-8">
      <HeroBanner />
      <CategoryGrid />

      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-secondary">Sản phẩm nổi bật</h2>
          <button className="text-primary text-sm">Xem thêm</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <BenefitsSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
