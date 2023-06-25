import React, { useState } from 'react';
import {
  useGetGamesByGenreQuery,
  useGetGameByIDQuery,
  useGetGameScreenShotsQuery,
  useGetGameSeriesQuery,
  useGetGamesQuery,
  useGetGamesByPlatformsQuery,
  useGetGameTrailersQuery,
  useGetGameAdditionsQuery,
  useGetGameDevTeamQuery,
} from '../services/getGamesApi';
import { allGames } from '../sampleData/sample';
import classes from './GamesBox.module.css';
import Modal from './UI/Modal';
import ExpandedGameCard from './ExpandedGameCard';

const GamesBox = ({ title, ratingClass, theme, slideIn }) => {
  const [expandCard, setExpandCard] = useState(false);
  const [gameExpand, setGameExpand] = useState(null);

  const inversion = theme === 'light' ? '0%' : '100%';
  // const { data, isFetching } = useGetGamesQuery();
  // const { data, isFetching } = useGetGameByIDQuery(3498);

  // const { data, isFetching } = useGetGameSeriesQuery(3498);

  // const { data, isFetching } = useGetGameByGenreQuery(15);
  // const { data, isFetching } = useGetGamesByPlatformsQuery(1);

  // const { data, isFetching } = useGetGameTrailersQuery(3498);
  // const { data, isFetching } = useGetGameAdditionsQuery(3498);
  // const { data, isFetching } = useGetGameDevTeamQuery(3498);
  // if (isFetching) return;

  // console.log(data);

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

  const expandGameCard = game => {
    setGameExpand(game);
    setExpandCard(true);
  };

  const closeGameCard = () => setExpandCard(false);

  return (
    <>
      <h3>{title}</h3>
      <div className={classes.movieBox}>
        <div
          className={`${classes.gamesWrapper} ${slideIn ? classes.resize : ''}`}
        >
          {allGames.map(game => (
            <div
              key={game?.id}
              className={classes.gamePoster}
              onClick={() => expandGameCard(game)}
            >
              <img src={game?.background_image} alt={game?.name} />

              <p className={classes.title}>{game?.name}</p>

              <div className={classes.moreDetails}>
                <span className={classes.platforms}>
                  {platforms.map((entry, i) =>
                    game?.parent_platforms?.map(
                      pt =>
                        pt?.platform?.id === entry.id && (
                          <img
                            key={entry.id}
                            src={entry.logo}
                            alt={entry.name}
                            style={{
                              filter: `invert(${inversion})`,
                            }}
                          />
                        )
                    )
                  )}
                </span>

                <span className={classes.date}>{getDate(game?.released)}</span>
              </div>

              <p className={classes.genre}>
                {game?.genres.map(
                  (genre, i) =>
                    `${genre?.name}${i < game?.genres.length - 1 ? ', ' : ''}`
                )}
              </p>

              <div className={classes.rating}>
                <p>
                  <span className={ratingClass(game?.metacritic)}>
                    {game?.metacritic}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expandCard && (
        <Modal onClose={closeGameCard}>
          <ExpandedGameCard
            game={gameExpand}
            getDate={getDate}
            inversion={inversion}
            platforms={platforms}
            ratingClass={ratingClass}
            onClose={closeGameCard}
          />
        </Modal>
      )}
    </>
  );
};

export default GamesBox;
