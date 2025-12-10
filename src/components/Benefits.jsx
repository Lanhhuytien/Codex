import React from 'react';
import { ShieldCheck, Truck, CreditCard, BadgeCheck } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Sản phẩm chính hãng 100%',
    desc: 'Nhập trực tiếp từ hãng, đầy đủ VAT, hóa đơn, bảo hành.',
  },
  {
    icon: BadgeCheck,
    title: 'Bảo hành tại TTBH chính hãng',
    desc: 'Hỗ trợ đổi mới 30 ngày nếu lỗi do nhà sản xuất.',
  },
  {
    icon: Truck,
    title: 'Giao hàng nhanh trong ngày',
    desc: 'Miễn phí nội thành, giao nhanh 2H tại Hà Nội & HCM.',
  },
  {
    icon: CreditCard,
    title: 'Trả góp 0% qua thẻ',
    desc: 'Hỗ trợ 25+ ngân hàng, thủ tục online, duyệt nhanh.',
  },
];

function Benefits() {
  return (
    <section className="my-12">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 grid md:grid-cols-4 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
