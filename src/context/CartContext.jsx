import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product, quantity = 1, options = {}) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id && p.selectedColor === options.color && p.selectedCapacity === options.capacity);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id && p.selectedColor === options.color && p.selectedCapacity === options.capacity
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      }
      return [...prev, { ...product, quantity, selectedColor: options.color, selectedCapacity: options.capacity }];
    });
    setOpen(true);
  };

  const removeFromCart = (id, color, capacity) =>
    setItems((prev) => prev.filter((p) => !(p.id === id && p.selectedColor === color && p.selectedCapacity === capacity)));

  const updateQuantity = (id, color, capacity, qty) =>
    setItems((prev) =>
      prev.map((p) =>
        p.id === id && p.selectedColor === color && p.selectedCapacity === capacity
          ? { ...p, quantity: Math.max(1, qty) }
          : p
      )
    );

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
    return { subtotal, itemCount: items.reduce((sum, item) => sum + item.quantity, 0) };
  }, [items]);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, totals, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
