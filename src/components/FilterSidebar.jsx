import React from 'react';

const FilterSidebar = ({ filters, onChange, onReset }) => {
  const handleCheckbox = (type, value) => {
    const set = new Set(filters[type]);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange({ ...filters, [type]: Array.from(set) });
  };

  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-4 w-full md:w-64 h-fit sticky top-24">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-charcoal">Bộ lọc</h3>
        <button onClick={onReset} className="text-sm text-primary font-semibold">Reset</button>
      </div>
      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <div className="font-semibold mb-2">Hãng</div>
          {['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Realme'].map((brand) => (
            <label key={brand} className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleCheckbox('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Dung lượng</div>
          {['128GB', '256GB', '512GB'].map((cap) => (
            <label key={cap} className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={filters.capacity.includes(cap)}
                onChange={() => handleCheckbox('capacity', cap)}
              />
              {cap}
            </label>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Khuyến mãi</div>
          {['Trả góp 0%', 'Giảm sốc', 'Độc quyền'].map((promo) => (
            <label key={promo} className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={filters.badge.includes(promo)}
                onChange={() => handleCheckbox('badge', promo)}
              />
              {promo}
            </label>
          ))}
        </div>
        <div>
          <div className="font-semibold mb-2">Khoảng giá</div>
          {[
            { label: 'Dưới 10 triệu', min: 0, max: 10000000 },
            { label: '10-15 triệu', min: 10000000, max: 15000000 },
            { label: '15-20 triệu', min: 15000000, max: 20000000 },
            { label: 'Trên 20 triệu', min: 20000000, max: 100000000 }
          ].map((range) => (
            <label key={range.label} className="flex items-center gap-2 py-1">
              <input
                type="checkbox"
                checked={filters.price.some((p) => p.label === range.label)}
                onChange={() => {
                  const exists = filters.price.find((p) => p.label === range.label);
                  const next = exists
                    ? filters.price.filter((p) => p.label !== range.label)
                    : [...filters.price, range];
                  onChange({ ...filters, price: next });
                }}
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
