import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import store from '@/app/store/store.ts';
import { setUser } from '@/app/store/userSlice/userSlice.ts';
import axios from '@/shared/api';
import { useNotification } from '@/shared/hooks';
import { UseAuthReturn } from '@/shared/hooks/useAuth/useAuth.types.ts';
import { log } from '@/shared/lib';

export const useAuth = <T>(url: string): UseAuthReturn<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      addNotification(`${error}`, 3000, 'error');
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
      log.error('Error authenticating user:', err.response?.data?.message);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { authenticate, loading, error };
};
