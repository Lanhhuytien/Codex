const brands = ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Realme', 'ASUS']
const storages = ['128GB', '256GB', '512GB']
const priceRanges = [
  { label: 'Dưới 10 triệu', value: 'low' },
  { label: '10 - 20 triệu', value: 'mid' },
  { label: 'Trên 20 triệu', value: 'high' },
]

const ProductFilter = ({ filters, onChange }) => {
  const toggleArrayFilter = (key, value) => {
    const values = new Set(filters[key])
    values.has(value) ? values.delete(value) : values.add(value)
    onChange({ ...filters, [key]: Array.from(values) })
  }

  return (
    <aside className="card p-4 sticky top-24">
      <h3 className="font-semibold text-lg mb-4">Bộ lọc</h3>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-sm mb-2">Hãng</p>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.brands.includes(brand)
                    ? 'border-primary text-primary bg-orange-50'
                    : 'border-gray-200 text-gray-700'
                }`}
                onClick={() => toggleArrayFilter('brands', brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm mb-2">Mức giá</p>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="price"
                  value={range.value}
                  checked={filters.price === range.value}
                  onChange={(e) => onChange({ ...filters, price: e.target.value })}
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm mb-2">Dung lượng</p>
          <div className="flex flex-wrap gap-2">
            {storages.map((storage) => (
              <button
                key={storage}
                className={`px-3 py-1 rounded-full border text-sm ${
                  filters.storage.includes(storage)
                    ? 'border-primary text-primary bg-orange-50'
                    : 'border-gray-200 text-gray-700'
                }`}
                onClick={() => toggleArrayFilter('storage', storage)}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>
        <button
          className="w-full text-sm font-semibold text-gray-700 underline"
          onClick={() => onChange({ brands: [], price: '', storage: [] })}
        >
          Xóa bộ lọc
        </button>
      </div>
    </aside>
  )
}

export default ProductFilter
