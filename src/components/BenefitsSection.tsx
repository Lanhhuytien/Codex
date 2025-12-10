const items = [
  {
    title: 'Sản phẩm chính hãng 100%',
    desc: 'Hàng mới, nguyên seal, hóa đơn VAT đầy đủ.',
  },
  {
    title: 'Bảo hành tại TTBH chính hãng',
    desc: 'Hỗ trợ bảo hành theo chính sách hãng, hướng dẫn tận nơi.',
  },
  {
    title: 'Giao nhanh trong ngày',
    desc: 'Nowship nội thành, COD toàn quốc.',
  },
  {
    title: 'Hỗ trợ trả góp 0%',
    desc: 'Qua thẻ tín dụng, xét duyệt nhanh, thủ tục online.',
  },
];

const BenefitsSection = () => (
  <section className="bg-white border border-gray-100 rounded-2xl max-w-6xl mx-auto px-4 py-10 shadow-card">
    <h2 className="text-2xl font-semibold text-secondary text-center mb-6">Vì sao nên mua tại Huy Tiến Store?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.title} className="p-4 rounded-xl bg-orange-50 border border-orange-100">
          <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
