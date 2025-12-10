import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id))

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeItem(id)
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clear = () => setItems([])

  const totals = useMemo(() => {
    const subtotal = items.reduce((acc, item) => acc + item.salePrice * item.quantity, 0)
    const original = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return {
      subtotal,
      original,
      savings: original - subtotal,
    }
  }, [items])

  const value = { items, addItem, removeItem, updateQuantity, clear, totals }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
