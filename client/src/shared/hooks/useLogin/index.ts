import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';

interface LoginParams {
  email: string;
  password: string;
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

  useEffect(() => {
    if (error) {
      addNotification(`Error: ${error}`, 3000, 'error');
    }
  }, [error]);

  const login = async (params: LoginParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/login', params);
      console.log('Login successful:', response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
