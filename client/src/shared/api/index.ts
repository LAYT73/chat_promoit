import axios from 'axios';

const index = axios.create({
  //   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
