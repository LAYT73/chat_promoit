import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { LoginPage } from '@/pages/LoginPage/ui';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<>home</>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
