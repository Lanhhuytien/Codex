import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.variant === product.variant);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id, variant) => {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return {
      subtotal,
      shipping: subtotal > 0 ? 30000 : 0,
      total: subtotal > 0 ? subtotal + 30000 : 0,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    summary,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
