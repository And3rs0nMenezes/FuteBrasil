import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Results from '../pages/Results';
import Parts from '../pages/Parts';
import Camps from '../pages/Camps';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/camps" element={<Camps />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
