import { useMemo, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

const Category = () => {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({ brands: [], price: '', storage: [] })
  const [sort, setSort] = useState('newest')

  const filteredProducts = useMemo(() => {
    const keyword = searchParams.get('keyword')?.toLowerCase() || ''
    return products
      .filter((product) => {
        const matchCategory = slug === 'search' || slug === 'khuyen-mai' || slug === 'tin-cong-nghe'
          ? true
          : product.category === slug || product.brand.toLowerCase() === slug
        const matchKeyword =
          keyword === '' ||
          product.name.toLowerCase().includes(keyword) ||
          product.brand.toLowerCase().includes(keyword)
        const matchBrand = filters.brands.length === 0 || filters.brands.includes(product.brand)
        const matchStorage = filters.storage.length === 0 || filters.storage.includes(product.storage)
        const matchPrice =
          filters.price === '' ||
          (filters.price === 'low' && product.salePrice < 10000000) ||
          (filters.price === 'mid' && product.salePrice >= 10000000 && product.salePrice <= 20000000) ||
          (filters.price === 'high' && product.salePrice > 20000000)

        return matchCategory && matchKeyword && matchBrand && matchStorage && matchPrice
      })
      .sort((a, b) => {
        if (sort === 'price-asc') return a.salePrice - b.salePrice
        if (sort === 'price-desc') return b.salePrice - a.salePrice
        if (sort === 'best-seller') return b.discount - a.discount
        return b.salePrice - a.salePrice
      })
  }, [filters, slug, searchParams, sort])

  const title = slug === 'search' ? 'Kết quả tìm kiếm' : `Danh mục: ${slug}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <ProductFilter filters={filters} onChange={setFilters} />
        </div>
        <div className="lg:flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h1 className="section-title mb-1">{title}</h1>
              <p className="text-gray-600 text-sm">Tìm thấy {filteredProducts.length} sản phẩm phù hợp.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Sắp xếp:</span>
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Mới nhất</option>
                <option value="best-seller">Bán chạy</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-600 py-10">Không có sản phẩm phù hợp bộ lọc.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Category
