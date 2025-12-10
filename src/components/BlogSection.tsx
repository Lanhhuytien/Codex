import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-10">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold text-secondary">Tin tức & Blog công nghệ</h2>
      <Link to="/news" className="text-primary text-sm">Xem tất cả</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden flex flex-col hover:-translate-y-1 transition"
        >
          <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" loading="lazy" />
          <div className="p-4 flex flex-col gap-2 flex-1">
            <span className="text-xs text-primary font-semibold uppercase">{blog.category}</span>
            <h3 className="font-semibold text-secondary leading-snug line-clamp-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{blog.excerpt}</p>
            <div className="mt-auto flex justify-between items-center text-xs text-gray-500">
              <span>{blog.date}</span>
              <Link to={`/news/${blog.id}`} className="text-primary font-semibold text-sm">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BlogSection;
