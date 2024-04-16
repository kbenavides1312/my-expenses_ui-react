import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Inventory from './Components/Inventory';
import FileUpload from './Components/FileUpload';
import Private from './Components/Private';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Private Component={<p>Hi</p>} />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<p>Hi</p>} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/upload" element={<FileUpload />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
