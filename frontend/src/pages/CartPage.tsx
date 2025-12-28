import { useEffect, useState } from 'react';
import { fetchCart, updateCartItem, removeCartItem } from '../api/cart';
import { useTranslation } from 'react-i18next';

export default function CartPage() {
  const [cart, setCart] = useState<any | null>(null);
  const { t } = useTranslation();

  const loadCart = () => {
    fetchCart().then(setCart);
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{t('cart.title')}</h2>
      <div className="grid">
        {cart.items?.map((item: any) => (
          <div className="card" key={item.id}>
            <h4>{item.product?.translations?.[0]?.name}</h4>
            <p>Qty: {item.quantity}</p>
            <div>
              <button onClick={() => updateCartItem(item.id, item.quantity + 1).then(loadCart)}>+</button>
              <button
                onClick={() => updateCartItem(item.id, Math.max(1, item.quantity - 1)).then(loadCart)}
              >
                -
              </button>
              <button onClick={() => removeCartItem(item.id).then(loadCart)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
