import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Big Deal cuối năm',
    desc: 'Giảm đến 8 triệu khi nâng cấp flagship',
    cta: 'Mua ngay',
    href: '/category/phones',
    gradient: 'from-primary to-orange-500',
    image:
      'https://res.cloudinary.com/dy7eycl8m/image/upload/v1700000000/mock/hero-iphone.png'
  },
  {
    title: 'Săn sale Galaxy AI',
    desc: 'Ưu đãi Galaxy S24 Series, tặng kèm Buds',
    cta: 'Xem khuyến mãi',
    href: '/promotions',
    gradient: 'from-gray-900 to-black',
    image: 'https://res.cloudinary.com/dy7eycl8m/image/upload/v1700000000/mock/hero-s24.png'
  }
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl shadow-card bg-gradient-to-r text-white min-h-[320px] flex flex-col md:flex-row">
        <div className={`absolute inset-0 bg-gradient-to-r ${slides[index].gradient} opacity-90`}></div>
        <div className="relative z-10 flex-1 p-8 flex flex-col justify-center gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Huy Tiến Store</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{slides[index].title}</h1>
          <p className="text-lg text-white/90 max-w-xl">{slides[index].desc}</p>
          <div className="flex gap-3 mt-2">
            <Link to={slides[index].href} className="btn-primary shadow-lg">
              {slides[index].cta}
            </Link>
            <Link to="/promotions" className="btn-secondary bg-white text-primary border-white">
              Xem khuyến mãi
            </Link>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <img
            src={slides[index].image}
            alt="Khuyến mãi"
            className="max-h-72 object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-8 h-1.5 rounded-full transition ${
                index === idx ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
