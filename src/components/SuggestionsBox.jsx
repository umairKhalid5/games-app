import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSearchGamesQuery } from '../services/getGamesApi';
import classes from './SuggestionsBox.module.css';
import { motion } from 'framer-motion';
import Image from './UI/Image';

const SuggestionsBox = ({
  searchTerm,
  setSearchTerm,
  setShowSuggestions,
  setSlideIn,
}) => {
  const { data, isFetching } = useGetSearchGamesQuery(searchTerm);

  if (isFetching) return;

  const filtertedGames = data?.results.filter(
    game => game?.rating > 0 && game?.background_image
  );

  return (
    <motion.div
      className={`${classes.suggestions} suggestionsList`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul role="list">
        {filtertedGames.length < 1 && <li>No matches found</li>}
        {filtertedGames.length > 1 &&
          filtertedGames.map(game => (
            <Link
              to={`/details/${game?.id}`}
              key={game?.id}
              onClick={() => {
                setShowSuggestions(false);
                setSearchTerm('');
                setSlideIn(false);
              }}
            >
              <li className="flex">
                <Image src={game?.background_image} alt={game?.name} />
                {/* <img src={game?.background_image} alt={game?.name} /> */}
                <div>
                  <p>{game?.name}</p>
                  <p>({new Date(game?.released).getFullYear()})</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </motion.div>
  );
};

export default SuggestionsBox;
