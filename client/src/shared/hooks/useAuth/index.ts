import { useContext, useEffect, useState } from 'react';
import axios from '@/shared/api';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';
import { setUser } from '@/app/store/userSlice/userSlice.ts';
import { useNavigate } from 'react-router-dom';
import store from '@/app/store/store.ts';
import { log } from '@/shared/lib';
interface UseAuthResult<T> {
  authenticate: (params: T) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useAuth = <T>(url: string): UseAuthResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      addNotification(`Error: ${error}`, 3000, 'error');
    }
  }, [error]);

  const authenticate = async (params: T) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, params);
      addNotification(`${response.data.message}`, 3000, 'success');
      log.info('User successfully authenticated');
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

  return { authenticate, loading, error };
};
