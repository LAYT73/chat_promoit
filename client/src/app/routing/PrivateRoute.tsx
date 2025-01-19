import React from 'react';

import { PrivateRouteProps } from '@/app/routing/PrivateRoute.types.ts';

import { Route } from './Route';

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  return <Route {...props} isPrivate={true} redirectPath="/login" />;
};
