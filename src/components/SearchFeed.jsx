import React from 'react';
import { useParams } from 'react-router-dom';
import GamesBox from './GamesBox';

const SearchFeed = ({
  slideIn,
  ratingClass,
  winSize,
  platforms,
  getDate,
  inversion,
}) => {
  const params = useParams();

  return (
    <div className="searchFeed">
      <h3>
        Search Results for <span>"{params?.searchTerm}"</span>:
      </h3>
      <GamesBox
        slideIn={slideIn}
        ratingClass={ratingClass}
        winSize={winSize}
        platforms={platforms}
        getDate={getDate}
        inversion={inversion}
        searchTerm={params?.searchTerm}
      />
    </div>
  );
};

export default SearchFeed;
