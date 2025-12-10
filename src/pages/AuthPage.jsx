import React from 'react';
import { Link } from 'react-router-dom';

function AuthPage({ mode = 'login' }) {
  const isLogin = mode === 'login';

  return (
    <div className="py-12 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl border p-6 shadow-card">
        <h1 className="text-2xl font-bold mb-2">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
        <p className="text-gray-600 mb-4">Truy cập Huy Tiến Store để mua sắm nhanh chóng.</p>
        <form className="space-y-4">
          {!isLogin && <input className="border rounded-lg px-3 py-2 w-full" placeholder="Họ tên" />}
          <input className="border rounded-lg px-3 py-2 w-full" placeholder="Email" type="email" />
          <input className="border rounded-lg px-3 py-2 w-full" placeholder="Mật khẩu" type="password" />
          <button className="btn btn-primary w-full" type="submit">
            {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
          </button>
        </form>
        <div className="text-sm text-center text-gray-600 mt-4">
          {isLogin ? (
            <>
              Chưa có tài khoản? <Link to="/register" className="text-primary-600 font-semibold">Đăng ký</Link>
            </>
          ) : (
            <>
              Đã có tài khoản? <Link to="/login" className="text-primary-600 font-semibold">Đăng nhập</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
