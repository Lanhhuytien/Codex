import { useEffect, useState } from 'react';
import { fetchAdminOrders, updateOrderStatus } from '../api/admin';

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrders = () => {
    fetchAdminOrders().then((data) => setOrders(data.data ?? data));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <div className="grid">
        {orders.map((order) => (
          <div className="card" key={order.id}>
            <h4>Order #{order.id}</h4>
            <p>Status: {order.status}</p>
            <select
              value={order.status}
              onChange={(event) => updateOrderStatus(order.id, event.target.value).then(loadOrders)}
            >
              {['CREATED', 'CONFIRMED', 'SHIPPING', 'COMPLETED', 'CANCELLED'].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
