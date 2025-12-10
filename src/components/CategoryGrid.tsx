import { Link } from 'react-router-dom';

const categories = [
  { title: 'Điện thoại iPhone', icon: '📱', to: '/category/phone?brand=Apple' },
  { title: 'Samsung Galaxy', icon: '✨', to: '/category/phone?brand=Samsung' },
  { title: 'Xiaomi', icon: '⚡️', to: '/category/phone?brand=Xiaomi' },
  { title: 'OPPO', icon: '🎨', to: '/category/phone?brand=OPPO' },
  { title: 'realme', icon: '🚀', to: '/category/phone?brand=Realme' },
  { title: 'Phụ kiện', icon: '🎧', to: '/category/accessories' },
];

const CategoryGrid = () => (
  <section className="max-w-6xl mx-auto px-4 py-10">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold text-secondary">Danh mục nổi bật</h2>
      <Link to="/category/phone" className="text-primary text-sm">Xem tất cả</Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.title}
          to={cat.to}
          className="bg-white rounded-xl shadow-card p-4 flex flex-col items-start gap-3 border border-gray-100 hover:-translate-y-1 transition transform"
        >
          <span className="text-3xl">{cat.icon}</span>
          <p className="font-medium text-secondary">{cat.title}</p>
          <span className="text-xs text-gray-500">Khám phá {cat.title}</span>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryGrid;
