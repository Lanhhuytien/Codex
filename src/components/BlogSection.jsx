import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const BlogSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-charcoal">Tin tức công nghệ</h2>
      <Link to="/blog" className="text-primary text-sm font-semibold">Xem tất cả</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogPosts.map((post) => (
        <article key={post.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover">
          <img src={post.image} alt={post.title} className="h-40 w-full object-cover" loading="lazy" />
          <div className="p-4 space-y-2">
            <div className="text-xs text-gray-500">{post.date}</div>
            <h3 className="font-semibold text-charcoal leading-snug max-h-12 overflow-hidden">{post.title}</h3>
            <p className="text-sm text-gray-600 max-h-12 overflow-hidden">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-primary text-sm font-semibold inline-flex items-center gap-1">
              Xem chi tiết <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BlogSection;
