import React, { useEffect, useState } from 'react';
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
  useGetSearchGamesQuery,
} from '../services/getGamesApi';
import classes from './GamesBox.module.css';
import Modal from './UI/Modal';
import ExpandedGameCard from './ExpandedGameCard';
import { useLocation, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Loader from './UI/Loader';
import { genres } from '../constants/constants';

const GamesBox = ({
  ratingClass,
  slideIn,
  winSize,
  platforms,
  getDate,
  inversion,
  home,
  series,
  additions,
  small,
  searchTerm,
  allGames2,
  genre,
}) => {
  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const [expandCard, setExpandCard] = useState(false);
  const [gameExpand, setGameExpand] = useState(null);

  const currentPage = localStorage.getItem('PageNumber')
    ? localStorage.getItem('PageNumber')
    : 1;
  localStorage.setItem('PageNumber', currentPage);

  const [page, setPage] = useState(+currentPage);

  // console.log(page);

  const params = useParams();

  const { data: allGames, isFetching: isFetchingAllGames } = useGetGamesQuery(
    home ?? skipToken
  );

  const genreObj = genre ? { genre: params?.genre, page } : undefined;

  const { data: gamesByGenre, isFetching: fetchingGamesByGenre } =
    useGetGamesByGenreQuery(genreObj ?? skipToken);

  const { data: gamesByPlatform, isFetching: fetchingGamesByPlatform } =
    useGetGamesByPlatformsQuery(params?.platform ?? skipToken);

  const { data: gameSeries, isFetching: fetchingGameSeries } =
    useGetGameSeriesQuery(series ?? skipToken);

  const { data: gameAdds, isFetching: fetchingGameAdds } =
    useGetGameAdditionsQuery(additions ?? skipToken);

  const { data: search, isFetching: fetchingSearch } = useGetSearchGamesQuery(
    searchTerm ?? skipToken
  );

  let filtertedGames = [];
  if (search) {
    filtertedGames = search?.results.filter(
      game => game?.rating > 0 && game?.background_image
    );
  }

  useEffect(() => {
    setPage(1);
    localStorage.setItem('PageNumber', 1);
  }, []);

  useEffect(() => {
    localStorage.setItem('PageNumber', page);
  }, [page]);

  useEffect(() => {
    return () => {
      setPage(1);
      localStorage.setItem('PageNumber', 1);
    };
  }, [params?.genre, params?.platform]);

  if (
    isFetchingAllGames ||
    fetchingGamesByGenre ||
    fetchingGamesByPlatform ||
    fetchingGameSeries ||
    fetchingGameAdds ||
    fetchingSearch
  )
    return <Loader />;

  // console.log(allGames ?? allGames2 ?? gamesByGenre ?? gamesByPlatform);

  // console.log(gamesByGenre);
  const nextPage =
    allGames2?.next ??
    allGames?.next ??
    gamesByGenre?.next ??
    gamesByPlatform?.next;
  const prevPage =
    allGames2?.previous ??
    allGames?.previous ??
    gamesByGenre?.previous ??
    gamesByPlatform?.previous;

  const gamesAvailable =
    allGames2?.results ??
    allGames?.results ??
    gamesByGenre?.results ??
    gamesByPlatform?.results ??
    gameSeries?.results ??
    gameAdds?.results ??
    filtertedGames;

  if (!gamesAvailable) return;
  const title =
    allGames || allGames2
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

  return (
    <>
      {!series && !additions && !searchTerm && <h3>{title}:</h3>}
      {/* {!series && !additions && <h3>Title:</h3>} */}
      <div className={classes.movieBox}>
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
                  <img src={game?.background_image} alt={game?.name} />

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
                        {game?.metacritic}
                      </span>
                    </p>
                  </div>
                </div>
              )
          )}
        </div>

        {genre && (
          <div className={classes.buttons}>
            <button
              disabled={!prevPage}
              onClick={() => setPage(prev => (prev -= 1))}
            >
              Prev
            </button>
            <button
              disabled={!nextPage}
              onClick={() => setPage(prev => (prev += 1))}
            >
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
    </>
  );
};

export default GamesBox;
