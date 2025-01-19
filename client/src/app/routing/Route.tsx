import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RouteProps } from '@/app/routing/Route.types.ts';

import { RootState } from '../store/store';

export const Route: React.FC<RouteProps> = ({
  element,
  isPrivate,
  redirectPath,
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isPrivate && !isAuthenticated) {
      navigate(redirectPath);
    } else if (!isPrivate && isAuthenticated) {
      navigate(redirectPath);
    }
  }, [isAuthenticated, isPrivate, navigate, redirectPath]);

  if ((isPrivate && isAuthenticated) || (!isPrivate && !isAuthenticated)) {
    return element;
  }

  return null;
};
