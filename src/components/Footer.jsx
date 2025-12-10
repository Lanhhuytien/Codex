const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Huy Tiến Store</h3>
          <p className="text-sm text-gray-300">Điện thoại chính hãng – Giao nhanh trong ngày</p>
          <p className="text-sm text-gray-300 mt-3">Địa chỉ: 123 Nguyễn Trãi, Hà Nội</p>
          <p className="text-sm text-gray-300">Hotline: 1900 988 899</p>
          <p className="text-sm text-gray-300">Email: support@huytienstore.vn</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Chính sách</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Bảo hành</a></li>
            <li><a href="#">Đổi trả</a></li>
            <li><a href="#">Giao hàng</a></li>
            <li><a href="#">Bảo mật</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Tra cứu đơn hàng</a></li>
            <li><a href="#">Hướng dẫn trả góp</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kết nối</h4>
          <div className="flex gap-3 text-xl">
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="YouTube">▶️</a>
            <a href="#" aria-label="Zalo">💬</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © 2025 Huy Tiến Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
