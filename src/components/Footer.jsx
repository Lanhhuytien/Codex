import React from 'react';

const Footer = () => (
  <footer className="bg-charcoal text-white mt-10">
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
      <div>
        <h3 className="font-bold text-lg mb-3">Huy Tiến Store</h3>
        <p className="text-white/80">Điện thoại chính hãng – Giao nhanh trong ngày.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Liên hệ</h4>
        <p>Địa chỉ: 123 Nguyễn Trãi, Hà Nội</p>
        <p>Hotline: <a href="tel:19001234" className="text-primary">1900 1234</a></p>
        <p>Email: support@huytienstore.vn</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Chính sách</h4>
        <ul className="space-y-1 text-white/80">
          <li>Bảo hành</li>
          <li>Đổi trả</li>
          <li>Giao hàng</li>
          <li>Bảo mật</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Kết nối</h4>
        <div className="flex gap-3 items-center">
          <span className="material-icons">facebook</span>
          <span className="material-icons">smartphone</span>
          <span className="material-icons">alternate_email</span>
        </div>
        <p className="mt-3 text-white/80">Nhận bản tin khuyến mãi hàng tuần.</p>
        <div className="flex mt-2">
          <input className="flex-1 px-3 py-2 rounded-l-lg text-black" placeholder="Nhập email" />
          <button className="btn-primary rounded-l-none rounded-r-lg">Đăng ký</button>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 text-center py-4 text-xs text-white/70">
      © 2025 Huy Tiến Store. All rights reserved.
    </div>
  </footer>
);

export default Footer;
