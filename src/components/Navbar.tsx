import { Link, NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';

const menu = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Điện thoại', to: '/category/phone' },
  { label: 'Laptop', to: '/category/laptop' },
  { label: 'Tablet', to: '/category/tablet' },
  { label: 'Phụ kiện', to: '/category/accessories' },
  { label: 'Khuyến mãi', to: '/promotions' },
  { label: 'Tin công nghệ', to: '/news' },
  { label: 'Liên hệ', to: '/contact' },
];

const iconClass = 'w-5 h-5';

const Navbar = () => {
  const { state } = useCart();
  const [query, setQuery] = useState('');
  const cartCount = useMemo(
    () => state.items.reduce((total, item) => total + item.quantity, 0),
    [state.items],
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg">
            HT
          </div>
          <div>
            <Link to="/" className="text-xl font-semibold text-secondary">
              Huy Tiến Store
            </Link>
            <p className="text-xs text-gray-500">Điện thoại chính hãng – Giao nhanh trong ngày</p>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 items-center">
          <div className="flex w-full max-w-xl rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 outline-none text-sm"
              placeholder="Tìm kiếm sản phẩm, thương hiệu, phụ kiện..."
            />
            <button className="bg-primary text-white px-4 text-sm font-medium">Tìm kiếm</button>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Link to="/auth" className="flex items-center gap-2 text-sm text-secondary">
            <UserIcon />
            <span className="hidden sm:block">Đăng nhập/Đăng ký</span>
          </Link>
          <Link to="/cart" className="relative flex items-center gap-2 text-sm text-secondary">
            <CartIcon />
            <span className="hidden sm:block">Giỏ hàng</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="bg-secondary text-white">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center overflow-x-auto gap-6 text-sm">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap transition-colors ${isActive ? 'text-primary' : 'text-white hover:text-accent'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

const UserIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM6 21a6 6 0 1112 0"
    />
  </svg>
);

const CartIcon = () => (
  <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l1 14h12l1-12H6" />
    <circle cx="9" cy="20" r="1.2" />
    <circle cx="17" cy="20" r="1.2" />
  </svg>
);

export default Navbar;
