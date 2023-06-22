import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import ImageSlider from './ImageSlider';

const Layout = () => {
  return (
    <div className="layout">
      <ImageSlider />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default Layout;
