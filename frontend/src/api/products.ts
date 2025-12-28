import { apiClient } from './client';

export interface ProductImage {
  id: number;
  path: string;
  is_primary: boolean;
}

export interface ProductTranslation {
  locale: string;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  sku: string;
  price: number;
  sale_price?: number;
  stock: number;
  translations: ProductTranslation[];
  images: ProductImage[];
}

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};
