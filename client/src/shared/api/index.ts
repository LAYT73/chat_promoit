import axios from 'axios';

const index = axios.create({
  //   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

index.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const getProfile = async () => {
  try {
    const response = await index.get('/profile');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user profile');
  }
};

export const createChat = async () => {
  try {
    const response = await index.post('/chats');
    return response.data;
  } catch (error) {
    throw new Error('Error creating chat');
  }
};

export default index;
