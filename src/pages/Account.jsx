import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  return (
    <div className="card p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold text-dark">Đăng nhập</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="button-primary w-full" onClick={() => navigate('/tai-khoan/thong-tin')}>
        Đăng nhập
      </button>
      <p className="text-sm text-center text-gray-600">
        Chưa có tài khoản? <Link to="/tai-khoan/dang-ky" className="text-primary font-semibold">Đăng ký</Link>
      </p>
    </div>
  )
}

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()
  return (
    <div className="card p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold text-dark">Đăng ký</h2>
      <input
        type="text"
        placeholder="Họ tên"
        className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full rounded-md border-gray-200 focus:border-primary focus:ring-primary"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="button-primary w-full" onClick={() => navigate('/tai-khoan/thong-tin')}>
        Tạo tài khoản
      </button>
      <p className="text-sm text-center text-gray-600">
        Đã có tài khoản? <Link to="/tai-khoan/dang-nhap" className="text-primary font-semibold">Đăng nhập</Link>
      </p>
    </div>
  )
}

const Profile = () => {
  const orders = [
    { id: 'HT12345', date: '10/12/2024', total: '21.990.000₫', status: 'Đang giao' },
    { id: 'HT12312', date: '02/12/2024', total: '9.990.000₫', status: 'Hoàn thành' },
  ]
  return (
    <div className="card p-6 space-y-4">
      <div>
        <h2 className="text-xl font-bold text-dark">Xin chào, Huy Tiến</h2>
        <p className="text-gray-600">Email: huytien@example.com</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Đơn hàng đã đặt</h3>
        <div className="space-y-2">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg px-3 py-2 flex justify-between text-sm text-gray-700">
              <span>#{order.id}</span>
              <span>{order.date}</span>
              <span className="font-semibold text-primary">{order.total}</span>
              <span>{order.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Account = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Routes>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/thong-tin" element={<Profile />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Account
