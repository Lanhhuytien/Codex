import React, { useEffect } from 'react';
import { setMeta } from '../utils/format';

const orders = [
  { id: 'HT001', date: '10/12/2025', status: 'Đang giao', total: '29.990.000đ' },
  { id: 'HT002', date: '01/12/2025', status: 'Hoàn thành', total: '19.990.000đ' }
];

const Account = () => {
  useEffect(() => setMeta('Hồ sơ', 'Thông tin tài khoản Huy Tiến Store'), []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-charcoal mb-4">Hồ sơ tài khoản</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="font-semibold text-charcoal mb-2">Thông tin cá nhân</div>
          <p className="text-sm text-gray-600">Nguyễn Huy Tiến</p>
          <p className="text-sm text-gray-600">huytien@example.com</p>
          <p className="text-sm text-gray-600">Hà Nội</p>
        </div>
        <div className="md:col-span-2 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="font-semibold text-charcoal mb-3">Đơn hàng đã đặt</div>
          <div className="space-y-2 text-sm">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2">
                <div>
                  <div className="font-semibold text-charcoal">#{order.id}</div>
                  <div className="text-gray-500">{order.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-semibold">{order.status}</div>
                  <div className="text-charcoal font-bold">{order.total}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
