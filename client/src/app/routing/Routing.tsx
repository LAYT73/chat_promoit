import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoute } from '@/app/routing/PublicRoute.tsx';
import { LoginPage, NotFoundPage, ProfilePage, SignupPage } from '@/pages';

import { Layout } from '../layouts/Layout.tsx';
import { PrivateRoute } from './PrivateRoute.tsx';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<PrivateRoute element={<>Home</>} />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<ProfilePage />} />}
          />
          <Route
            path="/login"
            element={<PublicRoute element={<LoginPage />} />}
          />
          <Route
            path="/sign-up"
            element={<PublicRoute element={<SignupPage />} />}
          />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Route>
        <Route path="/page-not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
