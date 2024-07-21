import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../store/store';

interface PrivateRouteProps {
  element: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return element;
  }
};
