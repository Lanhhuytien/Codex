import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Ưu đãi Tết - iPhone 15 Series giảm đến 5 triệu',
    subtitle: 'Thu cũ đổi mới, tặng thêm voucher 500K',
    cta: 'Mua ngay',
    image: 'https://images.unsplash.com/photo-1607861401862-0675c87f3c33?auto=format&fit=crop&w=1600&q=80',
    bg: 'from-primary-500/90 via-primary-600/80 to-dark/90',
  },
  {
    title: 'Galaxy S24 Ultra độc quyền Huy Tiến Store',
    subtitle: 'Nhận quà 3 triệu + bảo hành mở rộng',
    cta: 'Xem khuyến mãi',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80',
    bg: 'from-dark/90 via-gray-900/90 to-primary-500/80',
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % slides.length);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="my-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`grid md:grid-cols-2 items-center gap-8 p-8 sm:p-12 transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            } bg-gradient-to-r ${slide.bg}`}
          >
            <div className="text-white space-y-4">
              <p className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-sm font-semibold">Khuyến mãi mới</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{slide.title}</h1>
              <p className="text-lg text-white/90">{slide.subtitle}</p>
              <div className="flex items-center gap-3">
                <button className="btn btn-primary text-base px-6 py-3">{slide.cta}</button>
                <button className="btn btn-ghost text-base px-6 py-3">Tìm hiểu thêm</button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-24 h-24 bg-primary-400 blur-3xl opacity-40" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full rounded-2xl shadow-2xl object-cover border border-white/20"
                loading="lazy"
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prev} className="p-2 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-2 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full ${index === active ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
