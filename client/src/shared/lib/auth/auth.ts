import { jwtDecode } from 'jwt-decode';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};
