import React from 'react';
import { Mail, MapPin, Phone, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Huy Tiến Store</h3>
          <p className="text-gray-300 text-sm">Điện thoại chính hãng – Giao nhanh trong ngày</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Liên hệ</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> 123 Nguyễn Văn Cừ, Hà Nội</li>
            <li className="flex gap-2 items-center"><Phone className="w-4 h-4" /> Hotline: 1900 6868</li>
            <li className="flex gap-2 items-center"><Mail className="w-4 h-4" /> support@huytien.store</li>
            <li className="flex gap-2 items-center"><Facebook className="w-4 h-4" /> Fanpage: fb.com/huytienstore</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Chính sách</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Bảo hành</li>
            <li>Đổi trả</li>
            <li>Giao hàng</li>
            <li>Bảo mật</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Đăng ký nhận tin</h4>
          <p className="text-gray-300 text-sm mb-3">Nhận thông báo khuyến mãi và sản phẩm mới mỗi tuần.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Nhập email"
              className="flex-1 rounded-lg px-3 py-2 text-gray-900"
            />
            <button className="btn btn-primary">Gửi</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © 2025 Huy Tiến Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
