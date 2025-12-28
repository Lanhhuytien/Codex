import { apiClient } from './client';

export const fetchAdminOrders = async () => {
  const response = await apiClient.get('/admin/orders');
  return response.data;
};

export const updateOrderStatus = async (orderId: number, status: string) => {
  const response = await apiClient.patch(`/admin/orders/${orderId}/status`, { status });
  return response.data;
};

export const fetchRevenue = async (period: 'daily' | 'monthly') => {
  const response = await apiClient.get('/admin/finance/revenue', { params: { period } });
  return response.data;
};
