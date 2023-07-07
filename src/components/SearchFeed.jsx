import React from 'react';
import { useParams } from 'react-router-dom';
import GamesBox from './GamesBox';
import { motion } from 'framer-motion';

const SearchFeed = ({ slideIn, ratingClass, winSize, getDate, inversion }) => {
  const params = useParams();

  return (
    <motion.div
      className="searchFeed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3>
        Search Results for <span>"{params?.searchTerm}"</span>:
      </h3>
      <GamesBox
        slideIn={slideIn}
        ratingClass={ratingClass}
        winSize={winSize}
        // platforms={platforms}
        getDate={getDate}
        inversion={inversion}
        searchTerm={params?.searchTerm}
      />
    </motion.div>
  );
};

export default SearchFeed;
