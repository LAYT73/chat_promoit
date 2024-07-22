import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { LoginPage, SignupPage } from '@/pages';
import { PrivateRoute } from './PrivateRoute.tsx';
import { PublicRoute } from '@/app/routing/PublicRoute.tsx';
import { Layout } from './../layouts/Layout.tsx';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<PrivateRoute element={<>Home</>} />} />
          <Route
            path="/login"
            element={<PublicRoute element={<LoginPage />} />}
          />
          <Route
            path="/sign-up"
            element={<PublicRoute element={<SignupPage />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
