import { useEffect, useState } from 'react';
import { fetchOrders } from '../api/orders';

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h2>Order history</h2>
      <div className="grid">
        {orders.map((order) => (
          <div className="card" key={order.id}>
            <h4>Order #{order.id}</h4>
            <p>Status: {order.status}</p>
            <p>Total: {order.grand_total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
