import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Điện thoại', path: '/danh-muc/iphone' },
  { label: 'Laptop', path: '/danh-muc/laptop' },
  { label: 'Tablet', path: '/danh-muc/tablet' },
  { label: 'Phụ kiện', path: '/danh-muc/phu-kien' },
  { label: 'Khuyến mãi', path: '/danh-muc/khuyen-mai' },
  { label: 'Tin công nghệ', path: '/danh-muc/tin-cong-nghe' },
  { label: 'Liên hệ', path: '/danh-muc/lien-he' },
]

const Navbar = ({ onOpenCart }) => {
  const [keyword, setKeyword] = useState('')
  const { items } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/danh-muc/search?keyword=${encodeURIComponent(keyword)}`)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary text-white font-bold text-xl px-3 py-2 rounded-md">HT</div>
          <div>
            <div className="text-xl font-bold text-dark">Huy Tiến Store</div>
            <div className="text-sm text-gray-500">Điện thoại chính hãng – Giao nhanh trong ngày</div>
          </div>
        </Link>
        <form className="flex-1" onSubmit={handleSearch}>
          <div className="flex items-center bg-soft-gray rounded-full px-4 py-2 border border-transparent focus-within:border-primary transition">
            <input
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="Tìm kiếm sản phẩm, hãng, phụ kiện..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="text-sm font-semibold text-primary">Tìm kiếm</button>
          </div>
        </form>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-primary transition ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link to="/tai-khoan/dang-nhap" className="hidden md:inline-flex items-center gap-2 text-gray-700 hover:text-primary">
            <span aria-hidden>👤</span> Đăng nhập
          </Link>
          <button className="relative flex items-center gap-2 text-gray-700 hover:text-primary" onClick={onOpenCart} aria-label="Giỏ hàng">
            <span aria-hidden>🛒</span>
            <span>Giỏ hàng</span>
            <span className="absolute -top-2 -right-3 bg-primary text-white text-xs rounded-full px-2 py-0.5">{items.length}</span>
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-white border-t px-4 pb-3 flex items-center gap-4 overflow-x-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `py-2 text-sm whitespace-nowrap ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

export default Navbar
