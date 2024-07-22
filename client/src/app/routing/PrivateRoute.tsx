import React from 'react';
import { Route } from './Route';
import { PrivateRouteProps } from '@/app/routing/PrivateRoute.types.ts';

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  return <Route {...props} isPrivate={true} redirectPath="/login" />;
};
