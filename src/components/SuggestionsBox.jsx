import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetSearchGamesQuery } from '../services/getGamesApi';
import classes from './SuggestionsBox.module.css';

const SuggestionsBox = ({ searchTerm, setSearchTerm, setShowSuggestions }) => {
  const { data, isFetching } = useGetSearchGamesQuery(searchTerm);

  if (isFetching) return;

  const filtertedGames = data?.results.filter(
    game => game?.rating > 0 && game?.background_image
  );

  return (
    <div className={`${classes.suggestions} suggestionsList`}>
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
              }}
            >
              <li className="flex">
                <img src={game?.background_image} alt={game?.name} />
                <div>
                  <p>{game?.name}</p>
                  <p>({new Date(game?.released).getFullYear()})</p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SuggestionsBox;
