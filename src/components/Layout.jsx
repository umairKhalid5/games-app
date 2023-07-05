import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GamesBox from './GamesBox';
import ImageSlider from './ImageSlider';
import GameDetails from './GameDetails';
import { useGetGamesByPlatformsQuery } from '../services/getGamesApi';
import SearchFeed from './SearchFeed';

const Layout = ({ theme, slideIn, winSize, platforms }) => {
  const inversion = theme === 'light' ? '0%' : '100%';

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider ratingClass={ratingClass} />
              <GamesBox
                slideIn={slideIn}
                // title={'All Games'}
                ratingClass={ratingClass}
                // theme={theme}
                winSize={winSize}
                platforms={platforms}
                getDate={getDate}
                inversion={inversion}
                home
              />
            </>
          }
        />
        <Route
          path="/genre/:genre"
          element={
            <GamesBox
              slideIn={slideIn}
              ratingClass={ratingClass}
              winSize={winSize}
              platforms={platforms}
              getDate={getDate}
              inversion={inversion}
            />
          }
        />
        <Route
          path="/platform/:platform"
          element={
            <GamesBox
              slideIn={slideIn}
              ratingClass={ratingClass}
              winSize={winSize}
              platforms={platforms}
              getDate={getDate}
              inversion={inversion}
            />
          }
        />
        <Route
          path="/details/:gameId"
          element={
            <GameDetails
              ratingClass={ratingClass}
              platforms={platforms}
              getDate={getDate}
              inversion={inversion}
              winSize={winSize}
              slideIn={slideIn}
            />
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <SearchFeed
              slideIn={slideIn}
              ratingClass={ratingClass}
              winSize={winSize}
              platforms={platforms}
              getDate={getDate}
              inversion={inversion}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
