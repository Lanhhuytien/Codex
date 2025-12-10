import { useState } from 'react';

const AuthPage = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-bold text-secondary mb-3">{mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h1>
        <p className="text-gray-600">Truy cập ưu đãi thành viên, lưu đơn hàng và nhận tư vấn nhanh.</p>
        <div className="mt-6 space-y-4">
          <input placeholder="Email" className="w-full border border-gray-200 rounded-lg px-3 py-2" />
          <input type="password" placeholder="Mật khẩu" className="w-full border border-gray-200 rounded-lg px-3 py-2" />
          {mode === 'register' && (
            <input placeholder="Họ tên" className="w-full border border-gray-200 rounded-lg px-3 py-2" />
          )}
          <button className="w-full bg-primary text-secondary font-semibold py-3 rounded-lg hover:bg-orange-500">
            {mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
          </button>
          <p className="text-sm text-gray-600">
            {mode === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
            <button className="text-primary font-semibold" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
              {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
        <h3 className="text-xl font-semibold text-secondary mb-3">Quyền lợi thành viên</h3>
        <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
          <li>Theo dõi đơn hàng và bảo hành online</li>
          <li>Nhận ưu đãi độc quyền và mã giảm giá</li>
          <li>Lưu danh sách yêu thích, so sánh sản phẩm</li>
          <li>Hỗ trợ kỹ thuật nhanh qua chat</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthPage;
