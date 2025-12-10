const categories = [
  { title: 'iPhone chính hãng', slug: 'iphone', color: 'from-orange-100 to-orange-50' },
  { title: 'Samsung Galaxy', slug: 'samsung', color: 'from-slate-100 to-slate-50' },
  { title: 'Xiaomi & Redmi', slug: 'xiaomi', color: 'from-amber-50 to-orange-50' },
  { title: 'OPPO - Realme', slug: 'oppo', color: 'from-green-50 to-emerald-100' },
  { title: 'Tablet', slug: 'tablet', color: 'from-blue-50 to-indigo-50' },
  { title: 'Phụ kiện', slug: 'phu-kien', color: 'from-slate-50 to-zinc-100' },
]

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-10" id="categories">
      <div className="section-title">Danh mục nổi bật</div>
      <div className="section-subtitle">Lựa chọn nhanh theo thương hiệu bạn yêu thích</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`/danh-muc/${cat.slug}`}
            className={`card group p-4 bg-gradient-to-br ${cat.color} flex flex-col gap-3 items-start`}
          >
            <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-2xl shadow-inner">
              📱
            </div>
            <div className="font-semibold text-dark group-hover:text-primary transition">{cat.title}</div>
            <span className="text-sm text-gray-500">Xem ngay</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
