import React from 'react';

const benefits = [
  { title: 'Sản phẩm chính hãng 100%', desc: 'Nguồn hàng minh bạch, bảo hành điện tử đầy đủ.', icon: 'verified' },
  { title: 'Bảo hành tại TTBH chính hãng', desc: 'Liên kết mạng lưới bảo hành trên toàn quốc.', icon: 'handshake' },
  { title: 'Giao nhanh trong ngày', desc: 'Nhận hàng siêu tốc trong 2h tại nội thành.', icon: 'local_shipping' },
  { title: 'Hỗ trợ trả góp 0%', desc: 'Ưu đãi thẻ tín dụng, duyệt hồ sơ online.', icon: 'payments' }
];

const BenefitSection = () => (
  <section className="bg-white border-y border-gray-100 mt-8">
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="flex gap-3 items-start">
          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-icons">{benefit.icon}</span>
          </div>
          <div>
            <div className="font-semibold text-charcoal">{benefit.title}</div>
            <p className="text-sm text-gray-600 leading-snug">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitSection;
