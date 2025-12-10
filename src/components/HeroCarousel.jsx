import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'Giảm đến 6 triệu - Mua iPhone 15 Series',
    description: 'Hàng chính hãng VN/A, đổi trả trong 30 ngày, trả góp 0% qua thẻ.',
    cta: 'Mua ngay',
    link: '/danh-muc/iphone',
    image:
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Galaxy S24 Ultra giá tốt nhất',
    description: 'Tặng kèm gói bảo hành rơi vỡ, trợ giá lên đời tới 4 triệu.',
    cta: 'Xem khuyến mãi',
    link: '/danh-muc/samsung',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Laptop mỏng nhẹ cho sinh viên và văn phòng',
    description: 'Hàng mới 100%, nhiều ưu đãi quà tặng và giảm giá phụ kiện.',
    cta: 'Khám phá ngay',
    link: '/danh-muc/laptop',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80',
  },
]

const HeroCarousel = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.title} className="min-w-full grid md:grid-cols-2 bg-white">
              <div className="p-8 md:p-12 flex flex-col justify-center gap-4 bg-white/80 backdrop-blur">
                <div className="text-sm font-semibold text-primary uppercase tracking-wide">Khuyến mãi</div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">{slide.title}</h2>
                <p className="text-gray-600 text-lg">{slide.description}</p>
                <div className="flex gap-3">
                  <a href={slide.link} className="button-primary">
                    {slide.cta}
                  </a>
                  <a
                    href="#products"
                    className="px-4 py-2 rounded-md border border-gray-200 font-semibold text-gray-800 hover:border-primary hover:text-primary transition"
                  >
                    Xem sản phẩm nổi bật
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`h-2.5 w-8 rounded-full transition ${idx === active ? 'bg-primary' : 'bg-white/60'}`}
              onClick={() => setActive(idx)}
              aria-label={`Chuyển đến slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
