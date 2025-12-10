import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setMeta } from '../utils/format';

const Auth = () => {
  const [mode, setMode] = useState('login');
  useEffect(() => setMeta('Tài khoản', 'Đăng nhập hoặc đăng ký Huy Tiến Store'), []);

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 rounded-lg font-semibold ${mode === 'login' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2 rounded-lg font-semibold ${mode === 'register' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Đăng ký
          </button>
        </div>
        <div className="space-y-3 text-sm">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Mật khẩu" type="password" />
          {mode === 'register' && (
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Nhập lại mật khẩu" type="password" />
          )}
          <button className="btn-primary w-full">{mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}</button>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Bằng việc tiếp tục, bạn đồng ý với điều khoản của Huy Tiến Store.
        </p>
        <div className="text-center mt-3 text-sm">
          <Link to="/" className="text-primary font-semibold">
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
