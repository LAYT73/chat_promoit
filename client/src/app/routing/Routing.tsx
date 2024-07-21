import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { LoginPage } from '@/pages/LoginPage/ui';
import { PrivateRoute } from './PrivateRoute.tsx';
import { PublicRoute } from '@/app/routing/PublicRoute.tsx';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<PrivateRoute element={<>Home</>} />} />
          <Route
            path="/login"
            element={<PublicRoute element={<LoginPage />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
