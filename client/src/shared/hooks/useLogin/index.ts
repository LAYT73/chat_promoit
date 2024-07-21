import { useContext, useEffect, useState } from 'react';
import axios from '@/shared/api';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';
import { setUser } from '@/app/store/userSlice/userSlice.ts';
import { useNavigate } from 'react-router-dom';
import store from '@/app/store/store.ts';

interface LoginParams {
  email: string;
  password: string;
  remember: boolean;
}

interface UseLoginResult {
  login: (params: LoginParams) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useLogin = (): UseLoginResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      addNotification(`Error: ${error}`, 3000, 'error');
    }
  }, [error]);

  const login = async (params: LoginParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/auth/login', params);
      addNotification(`${response.data.message}`, 3000, 'success');
      const profile = await axios.get('/auth/profile');
      localStorage.setItem('profile', JSON.stringify(profile.data));
      store.dispatch(setUser(profile.data));
      navigate('/home');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
