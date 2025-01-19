import React from 'react';

import { PublicRouteProps } from '@/app/routing/PublicRoute.types.ts';

import { Route } from './Route';

export const PublicRoute: React.FC<PublicRouteProps> = (props) => {
  return <Route {...props} isPrivate={false} redirectPath="/home" />;
};
