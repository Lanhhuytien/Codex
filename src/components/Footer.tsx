const Footer = () => (
  <footer className="bg-secondary text-gray-200 mt-12">
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white font-semibold mb-3">Huy Tiến Store</h3>
        <p className="text-sm">Điện thoại chính hãng – Giao nhanh trong ngày</p>
        <p className="text-sm mt-2">Hotline: 1900 6868</p>
        <p className="text-sm">Email: support@huytienstore.vn</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Chính sách</h4>
        <ul className="space-y-2 text-sm">
          <li>Bảo hành</li>
          <li>Đổi trả</li>
          <li>Giao hàng</li>
          <li>Bảo mật</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Kênh thông tin</h4>
        <ul className="space-y-2 text-sm">
          <li>Fanpage Facebook</li>
          <li>Zalo Official</li>
          <li>Youtube Review</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-3">Địa chỉ</h4>
        <p className="text-sm">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
        <p className="text-sm">456 Cầu Giấy, Hà Nội</p>
        <p className="text-sm">© 2025 Huy Tiến Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
