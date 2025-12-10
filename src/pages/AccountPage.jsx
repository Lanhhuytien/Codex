import React from 'react';

const orders = [
  { id: 'ORD123456', date: '05/02/2025', total: 21990000, status: 'Đang giao' },
  { id: 'ORD123455', date: '15/01/2025', total: 10990000, status: 'Hoàn thành' },
];

function AccountPage() {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tài khoản của bạn</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-2xl border p-5 space-y-3">
          <h3 className="text-lg font-bold">Thông tin cá nhân</h3>
          <p className="text-gray-700">Nguyễn Văn A</p>
          <p className="text-gray-600 text-sm">Email: khachhang@example.com</p>
          <p className="text-gray-600 text-sm">SĐT: 0909 999 999</p>
          <button className="btn btn-ghost w-full">Chỉnh sửa</button>
        </div>
        <div className="md:col-span-2 bg-white rounded-2xl border p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Đơn hàng gần đây</h3>
            <button className="text-primary-600 font-semibold">Xem tất cả</button>
          </div>
          <div className="space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">Ngày đặt: {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-600 font-bold">{order.total.toLocaleString('vi-VN')}đ</p>
                  <p className="text-sm text-gray-600">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
