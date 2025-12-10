import { useMemo, useState } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import CategoryGrid from '../components/CategoryGrid'
import ProductCard from '../components/ProductCard'
import BenefitSection from '../components/BenefitSection'
import BlogGrid from '../components/BlogGrid'
import products from '../data/products'

const filtersDefault = { brands: [], price: '', storage: [] }

const Home = () => {
  const [filters, setFilters] = useState(filtersDefault)
  const [limit, setLimit] = useState(8)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchBrand =
        filters.brands.length === 0 || filters.brands.includes(product.brand) ||
        filters.brands.includes(product.brand?.toUpperCase())
      const matchStorage = filters.storage.length === 0 || filters.storage.includes(product.storage)
      const matchPrice =
        filters.price === '' ||
        (filters.price === 'low' && product.salePrice < 10000000) ||
        (filters.price === 'mid' && product.salePrice >= 10000000 && product.salePrice <= 20000000) ||
        (filters.price === 'high' && product.salePrice > 20000000)
      return matchBrand && matchStorage && matchPrice
    })
  }, [filters])

  return (
    <div>
      <HeroCarousel />
      <CategoryGrid />
      <section className="container mx-auto px-4 py-10" id="products">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="section-title mb-2">Sản phẩm nổi bật</div>
            <p className="text-gray-600">Giá tốt mỗi ngày, khuyến mãi hấp dẫn</p>
          </div>
          <div className="flex gap-2 text-sm text-gray-600">
            <button
              className={`px-3 py-1 rounded-full ${filters.price === 'low' ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setFilters({ ...filters, price: filters.price === 'low' ? '' : 'low' })}
            >
              Dưới 10 triệu
            </button>
            <button
              className={`px-3 py-1 rounded-full ${filters.brands.includes('Apple') ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  brands: prev.brands.includes('Apple') ? prev.brands.filter((b) => b !== 'Apple') : [...prev.brands, 'Apple'],
                }))
              }
            >
              Apple
            </button>
            <button
              className={`px-3 py-1 rounded-full ${filters.brands.includes('Samsung') ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  brands: prev.brands.includes('Samsung')
                    ? prev.brands.filter((b) => b !== 'Samsung')
                    : [...prev.brands, 'Samsung'],
                }))
              }
            >
              Samsung
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.slice(0, limit).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length > limit && (
          <div className="text-center mt-6">
            <button className="button-primary" onClick={() => setLimit((prev) => prev + 4)}>
              Xem thêm
            </button>
          </div>
        )}
      </section>
      <BenefitSection />
      <BlogGrid />
    </div>
  )
}

export default Home
