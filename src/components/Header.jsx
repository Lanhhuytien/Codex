import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, PhoneCall, MessageCircle, Search } from 'lucide-react';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Điện thoại', path: '/category/iphone' },
  { label: 'Laptop', path: '/category/laptop' },
  { label: 'Tablet', path: '/category/tablet' },
  { label: 'Phụ kiện', path: '/category/accessories' },
  { label: 'Khuyến mãi', path: '/category/promo' },
  { label: 'Tin công nghệ', path: '/category/news' },
  { label: 'Liên hệ', path: '/contact' },
];

function Header({ onOpenCart, cartCount }) {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    if (query) navigate(`/category/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="bg-dark text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>Huy Tiến Store – Sản phẩm chính hãng • Giao nhanh trong ngày</span>
          <div className="flex items-center gap-4">
            <a href="tel:19006868" className="flex items-center gap-2 hover:text-primary-200">
              <PhoneCall className="w-4 h-4" />
              <span>Hotline: 1900 6868</span>
            </a>
            <a href="#chat" className="flex items-center gap-2 hover:text-primary-200">
              <MessageCircle className="w-4 h-4" />
              <span>Chat nhanh</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary-500 text-white font-extrabold text-xl px-3 py-1 rounded-lg shadow-lg">HT</div>
            <div>
              <div className="text-xl font-bold text-gray-900">Huy Tiến Store</div>
              <p className="text-sm text-gray-500">Điện thoại chính hãng – Giao nhanh</p>
            </div>
          </Link>
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <input
                name="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 pl-11 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            </div>
          </form>
          <div className="flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
              <User className="w-5 h-5" />
              <span className="hidden md:inline-block">Đăng nhập</span>
            </Link>
            <button onClick={onOpenCart} className="relative flex items-center gap-2 text-gray-700 hover:text-primary-600">
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden md:inline-block">Giỏ hàng</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center overflow-x-auto gap-6 py-3 text-sm font-semibold text-gray-700">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `pb-2 border-b-2 whitespace-nowrap ${isActive ? 'border-primary-500 text-primary-600' : 'border-transparent hover:border-primary-100'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
