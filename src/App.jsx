import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { useCart } from './context/CartContext';

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const { summary } = useCart();

  const seo = useMemo(
    () => ({
      title: 'Huy Tiến Store | Điện thoại chính hãng – Giao nhanh trong ngày',
      description: 'Mua điện thoại iPhone, Samsung, Xiaomi, OPPO chính hãng tại Huy Tiến Store. Khuyến mãi, trả góp 0%, giao nhanh trong ngày.',
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onOpenCart={() => setCartOpen(true)} cartCount={summary.count} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Routes>
          <Route path="/" element={<HomePage seo={seo} onOpenCart={() => setCartOpen(true)} />} />
          <Route path="/category/:id" element={<CategoryPage onOpenCart={() => setCartOpen(true)} />} />
          <Route path="/product/:id" element={<ProductDetailPage onOpenCart={() => setCartOpen(true)} />} />
          <Route path="/cart" element={<CartPage onOpenCart={() => setCartOpen(true)} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
