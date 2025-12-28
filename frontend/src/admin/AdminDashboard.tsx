import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="grid">
        <Link className="card" to="/admin/products">Manage products</Link>
        <Link className="card" to="/admin/orders">Manage orders</Link>
        <Link className="card" to="/admin/banners">Manage banners</Link>
        <Link className="card" to="/admin/finance">Financial reports</Link>
      </div>
    </div>
  );
}
