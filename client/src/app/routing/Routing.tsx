import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { Input } from '@/shared/ui';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Input hint="home1" placeholder="home"></Input>}
          />
          <Route path="/login" element={<>login</>} />
          <Route path="/register" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
