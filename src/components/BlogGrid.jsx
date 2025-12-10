import blogs from '../data/blogs'

const BlogGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12" id="blogs">
      <div className="section-title">Tin tức & Blog công nghệ</div>
      <div className="section-subtitle">Các bài viết đánh giá, so sánh và mẹo hay dành cho bạn</div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="card overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4 space-y-2">
              <span className="badge bg-orange-50 text-primary border border-orange-100">{blog.category}</span>
              <h3 className="font-semibold text-lg text-dark leading-snug">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
              <a href="#" className="text-primary font-semibold text-sm hover:underline">
                Xem chi tiết
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogGrid
