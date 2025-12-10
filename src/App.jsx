import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import { useCart } from './context/CartContext'

function ShellLayout({ children, onOpenCart }) {
  return (
    <div className="min-h-screen flex flex-col bg-soft-gray">
      <TopBar />
      <Navbar onOpenCart={onOpenCart} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { items } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Huy Tiến Store | Điện thoại chính hãng'
  }, [])

  return (
    <div className="relative">
      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Routes>
        <Route
          path="/"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <Home />
            </ShellLayout>
          }
        />
        <Route
          path="/danh-muc/:slug"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <Category />
            </ShellLayout>
          }
        />
        <Route
          path="/san-pham/:id"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <ProductDetail />
            </ShellLayout>
          }
        />
        <Route
          path="/gio-hang"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <CartPage />
            </ShellLayout>
          }
        />
        <Route
          path="/thanh-toan"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <Checkout />
            </ShellLayout>
          }
        />
        <Route
          path="/tai-khoan/*"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <Account />
            </ShellLayout>
          }
        />
        <Route
          path="*"
          element={
            <ShellLayout onOpenCart={() => setIsDrawerOpen(true)}>
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Trang không tồn tại</h1>
                <p className="text-gray-600 mb-8">Có vẻ bạn đã đi lạc. Quay lại trang chủ nhé!</p>
                <button className="button-primary" onClick={() => navigate('/')}>Về trang chủ</button>
              </div>
            </ShellLayout>
          }
        />
      </Routes>
      {items.length > 0 && !isDrawerOpen && (
        <div
          className="fixed bottom-6 right-6 bg-dark text-white px-4 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-2"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span className="text-sm font-semibold">Xem giỏ hàng</span>
          <span className="bg-primary rounded-full px-2 py-1 text-xs font-bold">{items.length}</span>
        </div>
      )}
    </div>
  )
}

export default App
