import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../store/store';

interface PublicRouteProps {
  element: React.ReactElement;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);
  if (!isAuthenticated) {
    return element;
  }
};
