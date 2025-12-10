import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const menus = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Điện thoại', to: '/category/phones' },
  { label: 'Laptop', to: '/category/laptop' },
  { label: 'Tablet', to: '/category/tablet' },
  { label: 'Phụ kiện', to: '/category/accessories' },
  { label: 'Khuyến mãi', to: '/promotions' },
  { label: 'Tin công nghệ', to: '/blog' },
  { label: 'Liên hệ', to: '/contact' }
];

const Navbar = ({ searchTerm, onSearchChange, onCartToggle }) => {
  const navigate = useNavigate();
  const { totals } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/category/phones');
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-gray-200"
          aria-label="Toggle menu"
        >
          <span className="material-icons">menu</span>
        </button>
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-charcoal">
          <div className="bg-primary text-white rounded-md px-2 py-1">HT</div>
          <div className="leading-tight">
            <div>Huy Tiến Store</div>
            <span className="text-xs text-gray-500">Điện thoại chính hãng</span>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex-1 hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2"
        >
          <span className="material-icons text-gray-500">search</span>
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm sản phẩm, thương hiệu..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
          <button type="submit" className="btn-primary text-sm px-4 py-1.5">Tìm kiếm</button>
        </form>
        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden lg:flex flex-col text-xs text-gray-500">
            <span className="text-charcoal font-semibold">Hotline</span>
            <a href="tel:19001234" className="text-primary font-bold">1900 1234</a>
          </div>
          <Link
            to="/support"
            className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-primary"
          >
            <span className="material-icons">chat</span>
            Hỗ trợ nhanh
          </Link>
          <Link to="/login" className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary">
            <span className="material-icons">person</span>
            Đăng nhập
          </Link>
          <button
            onClick={onCartToggle}
            className="relative p-2 rounded-full border border-gray-200 hover:border-primary"
            aria-label="Giỏ hàng"
          >
            <span className="material-icons text-charcoal">shopping_cart</span>
            {totals.itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1">
                {totals.itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-3">
        <form
          onSubmit={handleSubmit}
          className="flex md:hidden items-center gap-2 bg-gray-100 rounded-full px-3 py-2 mb-3"
        >
          <span className="material-icons text-gray-500">search</span>
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm sản phẩm, thương hiệu..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
          <button type="submit" className="btn-primary text-sm px-4 py-1.5">Tìm kiếm</button>
        </form>
        <nav className={`${mobileOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-semibold text-gray-700">
            {menus.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg hover:bg-gray-100 block ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
