import React from 'react';
import { Route } from './Route';
import { PublicRouteProps } from '@/app/routing/PublicRoute.types.ts';

export const PublicRoute: React.FC<PublicRouteProps> = (props) => {
  return <Route {...props} isPrivate={false} redirectPath="/home" />;
};
