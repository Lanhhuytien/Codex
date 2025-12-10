const orders = [
  {
    id: 'DH001',
    date: '05/01/2025',
    total: '29.990.000₫',
    status: 'Đang giao',
    items: 'iPhone 15 Pro Max 256GB',
  },
  {
    id: 'DH002',
    date: '20/12/2024',
    total: '12.990.000₫',
    status: 'Hoàn tất',
    items: 'OPPO Reno12 Pro 5G',
  },
];

const AccountPage = () => (
  <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
      <h1 className="text-2xl font-semibold text-secondary mb-4">Hồ sơ tài khoản</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <p><span className="font-semibold">Họ tên:</span> Nguyễn Huy Tiến</p>
        <p><span className="font-semibold">Email:</span> tien.nguyen@example.com</p>
        <p><span className="font-semibold">Số điện thoại:</span> 0909 888 888</p>
        <p><span className="font-semibold">Địa chỉ:</span> 123 Nguyễn Huệ, Quận 1</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
      <h2 className="text-xl font-semibold text-secondary mb-4">Đơn hàng của bạn</h2>
      <div className="space-y-3 text-sm text-gray-700">
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-100 rounded-lg p-3">
            <div>
              <p className="font-semibold text-secondary">{order.id}</p>
              <p>{order.items}</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>Ngày: {order.date}</p>
              <p>Trạng thái: {order.status}</p>
            </div>
            <div className="font-semibold text-secondary">{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AccountPage;
