import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Account from './pages/Account';
import { CartProvider, useCart } from './context/CartContext';

const AppShell = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setOpen } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Topbar />
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} onCartToggle={() => setOpen(true)} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/category/:id" element={<Category searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Home searchTerm={searchTerm} />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </div>
  );
};

const App = () => (
  <CartProvider>
    <AppShell />
  </CartProvider>
);

export default App;
