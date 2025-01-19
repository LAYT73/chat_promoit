import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import store from '@/app/store/store.ts';
import { clearUser } from '@/app/store/userSlice/userSlice.ts';
import axios from '@/shared/api';
import { UseLogoutReturn } from '@/shared/hooks/useLogout/useLogout.types.ts';
import { log } from '@/shared/lib';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';

export const useLogout = (): UseLogoutReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      addNotification(`${error}`, 3000, 'error');
    }
  }, [error]);
  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/auth/logout');
      localStorage.removeItem('profile');
      store.dispatch(clearUser());
      addNotification('Successfully logged out', 3000, 'success');
      navigate('/login');
    } catch (err: any) {
      log.error(err);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [navigate, addNotification]);

  return { logout, loading, error };
};
