import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/login" element={<>login</>} />
          <Route path="/register" element={<></>} />
          <Route path="/home" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;