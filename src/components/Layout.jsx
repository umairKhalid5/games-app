import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamesBox from './GamesBox';
import ImageSlider from './ImageSlider';

const Layout = ({ theme, slideIn }) => {
  const ratingClass = rating => {
    let classRating;
    if (rating > 79) return (classRating = 'rt_top');
    if (rating > 59 && rating < 80) return (classRating = 'rt_good');
    if (rating > 39 && rating < 60) return (classRating = 'rt_below_avg');
    if (rating < 40) return (classRating = 'rt_bad');
  };
  return (
    <div className="layout">
      <ImageSlider ratingClass={ratingClass} slideIn={slideIn} />
      <Routes>
        <Route
          path="/"
          element={
            <GamesBox
              slideIn={slideIn}
              title={'All Games'}
              ratingClass={ratingClass}
              theme={theme}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
