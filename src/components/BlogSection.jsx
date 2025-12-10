import React from 'react';
import { blogPosts } from '../data/products';
import { ArrowRight } from 'lucide-react';

function BlogSection() {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="section-title">Tin tức & Blog công nghệ</h2>
          <p className="section-subtitle">Cập nhật xu hướng, đánh giá và mẹo sử dụng smartphone.</p>
        </div>
        <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1">
          Xem tất cả <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="card">
            <img src={post.image} alt={post.title} className="w-full h-44 object-cover rounded-xl" loading="lazy" />
            <div className="mt-4 space-y-2">
              <span className="badge">{post.tag}</span>
              <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
              <p className="text-gray-600 line-clamp-2">{post.description}</p>
              <button className="text-primary-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Xem chi tiết <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
