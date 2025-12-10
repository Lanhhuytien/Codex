import { brands, priceRanges } from '../data/products';

export type Filters = {
  brand?: string;
  price?: string;
  capacity?: string;
  onSale?: boolean;
};

const FilterSidebar = ({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) => {
  return (
    <aside className="bg-white rounded-xl border border-gray-100 p-4 shadow-card h-fit space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Hãng sản xuất</h3>
        <div className="flex flex-col gap-2 text-sm">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="radio"
                name="brand"
                className="accent-primary"
                checked={filters.brand === brand}
                onChange={() => setFilters({ ...filters, brand })}
              />
              {brand}
            </label>
          ))}
          <button className="text-xs text-gray-500 text-left" onClick={() => setFilters({ ...filters, brand: undefined })}>
            Bỏ chọn
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Khoảng giá</h3>
        <div className="flex flex-col gap-2 text-sm">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                className="accent-primary"
                checked={filters.price === range.value}
                onChange={() => setFilters({ ...filters, price: range.value })}
              />
              {range.label}
            </label>
          ))}
          <button className="text-xs text-gray-500 text-left" onClick={() => setFilters({ ...filters, price: undefined })}>
            Bỏ chọn
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Khuyến mãi</h3>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="accent-primary"
            checked={Boolean(filters.onSale)}
            onChange={(e) => setFilters({ ...filters, onSale: e.target.checked })}
          />
          Đang giảm giá
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
