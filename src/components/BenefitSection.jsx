const benefits = [
  {
    title: 'Sản phẩm chính hãng 100%',
    desc: 'Nguồn hàng minh bạch, xuất hóa đơn VAT, bảo hành chuẩn hãng.',
    icon: '✅',
  },
  {
    title: 'Bảo hành tại TTBH chính hãng',
    desc: 'Hỗ trợ tiếp nhận bảo hành nhanh chóng tại Huy Tiến Store.',
    icon: '🛠️',
  },
  {
    title: 'Giao nhanh trong ngày',
    desc: 'Đặt trước 17h giao trong 2-4h tại nội thành, COD toàn quốc.',
    icon: '🚚',
  },
  {
    title: 'Hỗ trợ trả góp 0%',
    desc: 'Nhiều ngân hàng, xét duyệt nhanh, thủ tục online tiện lợi.',
    icon: '💳',
  },
]

const BenefitSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="card p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-3 items-start">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-dark">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitSection
