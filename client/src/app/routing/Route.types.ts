import React from 'react';

export interface RouteProps {
  element: React.ReactElement;
  isPrivate: boolean;
  redirectPath: string;
}
