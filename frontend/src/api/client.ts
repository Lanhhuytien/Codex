import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string;

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: false
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const locale = localStorage.getItem('locale') || 'en';
  config.headers['Accept-Language'] = locale;
  return config;
});
