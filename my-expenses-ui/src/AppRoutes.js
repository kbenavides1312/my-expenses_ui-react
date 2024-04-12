import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Private from './Components/Private';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Private Component={<p>Hi</p>} />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<p>Hi</p>} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
