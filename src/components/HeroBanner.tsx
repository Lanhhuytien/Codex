import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Ưu đãi Tết - Giảm đến 5 triệu',
    subtitle: 'iPhone 15 Pro Max, Galaxy S24 Ultra, Xiaomi 14',
    cta: 'Mua ngay',
    ctaLink: '/category/phone',
    accent: 'Áp dụng đến 28/02',
    image:
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Laptop văn phòng & gaming',
    subtitle: 'Giảm đến 4 triệu, tặng kèm balo cao cấp',
    cta: 'Xem khuyến mãi',
    ctaLink: '/category/laptop',
    accent: 'Hỗ trợ trả góp 0%',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Phụ kiện chính hãng giá tốt',
    subtitle: 'Tai nghe, sạc nhanh, ốp lưng, kính cường lực',
    cta: 'Mua phụ kiện',
    ctaLink: '/category/accessories',
    accent: 'Giảm thêm 10% khi mua kèm máy',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1100&q=80',
  },
];

const HeroBanner = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl shadow-card bg-gradient-to-r from-secondary to-black text-white">
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{ transform: `translateX(-${active * 100}%)`, display: 'grid', gridTemplateColumns: `repeat(${slides.length}, 100%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
              <div className="flex-1 space-y-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/20">
                  {slide.accent}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg text-gray-200">{slide.subtitle}</p>
                <div className="flex gap-3">
                  <Link
                    to={slide.ctaLink}
                    className="bg-primary text-secondary font-semibold px-4 py-2 rounded-lg hover:bg-white transition"
                  >
                    {slide.cta}
                  </Link>
                  <Link to="/promotions" className="border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10">
                    Xem khuyến mãi
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <img src={slide.image} alt={slide.title} className="w-full h-64 lg:h-80 object-cover rounded-xl" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Slide ${index + 1}`}
              className={`w-3 h-3 rounded-full border border-white ${active === index ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
