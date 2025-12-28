import { apiClient } from './client';

export const checkout = async (payload: { shipping_address: string }) => {
  const response = await apiClient.post('/checkout', payload);
  return response.data;
};

export const fetchOrders = async () => {
  const response = await apiClient.get('/orders');
  return response.data;
};

export const fetchOrder = async (orderId: number) => {
  const response = await apiClient.get(`/orders/${orderId}`);
  return response.data;
};
