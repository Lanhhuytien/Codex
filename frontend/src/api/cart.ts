import { apiClient } from './client';

export const fetchCart = async () => {
  const response = await apiClient.get('/cart');
  return response.data;
};

export const addCartItem = async (payload: { product_id: number; quantity: number }) => {
  const response = await apiClient.post('/cart/items', payload);
  return response.data;
};

export const updateCartItem = async (itemId: number, quantity: number) => {
  const response = await apiClient.patch(`/cart/items/${itemId}`, { quantity });
  return response.data;
};

export const removeCartItem = async (itemId: number) => {
  const response = await apiClient.delete(`/cart/items/${itemId}`);
  return response.data;
};
