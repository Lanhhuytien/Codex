import { apiClient } from './client';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
  roles?: string[];
}

export const login = async (email: string, password: string) => {
  const response = await apiClient.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

export const register = async (payload: { name: string; email: string; password: string; password_confirmation: string }) => {
  const response = await apiClient.post<AuthResponse>('/auth/register', payload);
  return response.data;
};

export const fetchMe = async () => {
  const response = await apiClient.get<{ user: AuthUser; roles: string[] }>('/me');
  return response.data;
};

export const logout = async () => {
  await apiClient.post('/auth/logout');
};
