import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamesBox from './GamesBox';
import ImageSlider from './ImageSlider';
import GameDetails from './GameDetails';

const Layout = ({ theme, slideIn, winSize }) => {
  const inversion = theme === 'light' ? '0%' : '100%';

  const platforms = [
    { logo: 'src/assets/windows.png', name: 'PC', id: 1 },
    { logo: 'src/assets/playstation.png', name: 'Playstation', id: 2 },
    { logo: 'src/assets/xbox.png', name: 'Xbox', id: 3 },
    { logo: 'src/assets/nintendo.png', name: 'Nintendo', id: 7 },
  ];

  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const getDate = date => {
    const dateToUse = new Date(date);
    return new Intl.DateTimeFormat('en-US', options).format(dateToUse);
  };

  const ratingClass = rating => {
    let classRating;
    if (rating > 79) return (classRating = 'rt_top');
    if (rating > 59 && rating < 80) return (classRating = 'rt_good');
    if (rating > 39 && rating < 60) return (classRating = 'rt_below_avg');
    if (rating < 40) return (classRating = 'rt_bad');
  };
  return (
    <div className="layout">
      {/* <ImageSlider ratingClass={ratingClass} slideIn={slideIn} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider ratingClass={ratingClass} slideIn={slideIn} />
              <GamesBox
                slideIn={slideIn}
                title={'All Games'}
                ratingClass={ratingClass}
                // theme={theme}
                winSize={winSize}
                platforms={platforms}
                getDate={getDate}
                inversion={inversion}
              />
            </>
          }
        />
        {/* <Route
          path="/"
          element={
            <GamesBox
              slideIn={slideIn}
              title={'All Games'}
              ratingClass={ratingClass}
              theme={theme}
              winSize={winSize}
            />
          }
        /> */}
        <Route
          path="/:gameId"
          element={
            <GameDetails
              ratingClass={ratingClass}
              platforms={platforms}
              getDate={getDate}
              inversion={inversion}
              winSize={winSize}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
