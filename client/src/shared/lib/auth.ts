import { jwtDecode } from 'jwt-decode'; // или import * as jwtDecode from 'jwt-decode';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
