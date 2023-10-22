import React, { useEffect, useState } from 'react';
import {
  useGetGamesByGenreQuery,
  useGetGameSeriesQuery,
  useGetGamesQuery,
  useGetGamesByPlatformsQuery,
  useGetGameAdditionsQuery,
  useGetSearchGamesQuery,
} from '../services/getGamesApi';
import classes from './GamesBox.module.css';
import Modal from './UI/Modal';
import ExpandedGameCard from './ExpandedGameCard';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Loader from './UI/Loader';
import { genres, platforms } from '../constants/constants';
import { motion } from 'framer-motion';
import Image from './UI/Image';

const GamesBox = ({
  ratingClass,
  slideIn,
  winSize,
  getDate,
  inversion,
  home,
  series,
  additions,
  small,
  searchTerm,
  allGames2,
  genre,
  platform,
}) => {
  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [expandCard, setExpandCard] = useState(false);
  const [gameExpand, setGameExpand] = useState(null);

  const queryParams = new URLSearchParams(location.search).get('page');
  const [page, setPage] = useState(+queryParams);

  const genreObj = genre ? { genre: params?.genre, page } : undefined;
  const platformObj = platform
    ? { platform: params?.platform, page }
    : undefined;

  const { data: allGames, isFetching: isFetchingAllGames } = useGetGamesQuery(
    (home && 1) ?? (allGames2 && +queryParams) ?? skipToken
  );

  const { data: gamesByGenre, isFetching: fetchingGamesByGenre } =
    useGetGamesByGenreQuery(genreObj ?? skipToken);

  const { data: gamesByPlatform, isFetching: fetchingGamesByPlatform } =
    useGetGamesByPlatformsQuery(platformObj ?? skipToken);

  const { data: gameSeries, isFetching: fetchingGameSeries } =
    useGetGameSeriesQuery(series ?? skipToken);

  const { data: gameAdds, isFetching: fetchingGameAdds } =
    useGetGameAdditionsQuery(additions ?? skipToken);

  const { data: search, isFetching: fetchingSearch } = useGetSearchGamesQuery(
    searchTerm ?? skipToken
  );

  let filtertedGames = [];
  if (search)
    filtertedGames = search?.results.filter(
      game => game?.rating > 0 && game?.background_image
    );

  useEffect(() => {
    setPage(+queryParams);
  }, [queryParams]);

  if (
    isFetchingAllGames ||
    fetchingGamesByGenre ||
    fetchingGamesByPlatform ||
    fetchingGameSeries ||
    fetchingGameAdds ||
    fetchingSearch
  )
    return <Loader />;

  // console.log(gamesByGenre);
  const nextPage =
    (allGames2 && allGames?.next) ??
    (genre && gamesByGenre?.next) ??
    (platform && gamesByPlatform?.next);

  const prevPage =
    (allGames2 && allGames?.previous) ??
    (genre && gamesByGenre?.previous) ??
    (platform && gamesByPlatform?.previous);

  const gamesAvailable =
    (platform && gamesByPlatform?.results) ??
    // (allGames2 && allGames?.results) ??
    ((home ?? allGames2) && allGames?.results) ??
    (genre && gamesByGenre?.results) ??
    gameSeries?.results ??
    gameAdds?.results ??
    (filtertedGames.length > 1 && filtertedGames);

  if (!gamesAvailable) return;

  const title =
    home ?? allGames2
      ? 'All Games'
      : params?.genre
      ? genres.find(pl => pl.id === +params?.genre).name
      : params?.platform
      ? platforms.find(pl => pl.id === +params?.platform).name
      : '';

  const expandGameCard = game => {
    setGameExpand(game);
    setExpandCard(true);
  };

  const closeGameCard = () => setExpandCard(false);

  const pageHandler = dir => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    if (dir === 'next') {
      navigate(`?page=${page + 1}`);
      setPage(prev => (prev += 1));
    } else {
      navigate(`?page=${page - 1}`);
      setPage(prev => (prev -= 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {!series && !additions && !searchTerm && <h3>{title}:</h3>}
      <div
        className={classes.movieBox}
        // variants={variants}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
        // style={{ transformOrigin: 'top' }}
      >
        <div
          className={`${classes.gamesWrapper} ${slideIn && classes.resize} ${
            small && classes.small
          }`}
        >
          {gamesAvailable?.map(
            game =>
              game?.background_image && (
                <div
                  key={game?.id}
                  className={classes.gamePoster}
                  onClick={() => expandGameCard(game)}
                >
                  {/* <img src={game?.background_image} alt={game?.name} /> */}
                  <Image
                    src={game?.background_image}
                    alt={game?.name}
                    className={classes.posterImage}
                  />

                  <p className={classes.title}>{game?.name}</p>

                  <div className={classes.moreDetails}>
                    <span className={classes.platforms}>
                      {platforms.map(entry =>
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

                    <span className={classes.date}>
                      {getDate(game?.released)}
                    </span>
                  </div>

                  <p className={classes.genre}>
                    {game?.genres.map(
                      (genre, i) =>
                        `${genre?.name}${
                          i < game?.genres.length - 1 ? ', ' : ''
                        }`
                    )}
                  </p>

                  <div className={classes.rating}>
                    <p>
                      <span className={ratingClass(game?.metacritic)}>
                        {game?.metacritic || 'NA'}
                      </span>
                    </p>
                  </div>
                </div>
              )
          )}
        </div>

        {(genre || platform || allGames2) && (
          <div className={classes.buttons}>
            <button disabled={!prevPage} onClick={() => pageHandler('prev')}>
              Prev
            </button>
            <button disabled={!nextPage} onClick={() => pageHandler('next')}>
              Next
            </button>
          </div>
        )}
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
            winSize={winSize}
          />
        </Modal>
      )}
    </motion.div>
  );
};

export default GamesBox;
