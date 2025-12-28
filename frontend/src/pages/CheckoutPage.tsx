import { useState } from 'react';
import { checkout } from '../api/orders';
import { useTranslation } from 'react-i18next';

export default function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleCheckout = async () => {
    const order = await checkout({ shipping_address: address });
    setMessage(`Order #${order.id} created.`);
  };

  return (
    <div className="card">
      <h2>{t('cart.checkout')}</h2>
      <input
        placeholder={t('cart.address')}
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <button onClick={handleCheckout}>{t('cart.checkout')}</button>
      {message && <p>{message}</p>}
    </div>
  );
}
