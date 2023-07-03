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
import { useParams } from 'react-router-dom';
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
}) => {
  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const [expandCard, setExpandCard] = useState(false);
  const [gameExpand, setGameExpand] = useState(null);

  const params = useParams();

  const { data: allGames, isFetching: isFetchingAllGames } = useGetGamesQuery(
    home ?? skipToken
  );

  const { data: gamesByGenre, isFetching: fetchingGamesByGenre } =
    useGetGamesByGenreQuery(params?.genre ?? skipToken);

  const { data: gamesByPlatform, isFetching: fetchingGamesByPlatform } =
    useGetGamesByPlatformsQuery(params?.platform ?? skipToken);

  const { data: gameSeries, isFetching: fetchingGameSeries } =
    useGetGameSeriesQuery(series ?? skipToken);

  const { data: gameAdds, isFetching: fetchingGameAdds } =
    useGetGameAdditionsQuery(additions ?? skipToken);

  if (
    isFetchingAllGames ||
    fetchingGamesByGenre ||
    fetchingGamesByPlatform ||
    fetchingGameSeries ||
    fetchingGameAdds
  )
    return <Loader />;

  // console.log(allGames, gamesByGenre, gamesByPlatform, gameSeries, gameAdds);

  const gamesAvailable =
    allGames?.results ??
    gamesByGenre?.results ??
    gamesByPlatform?.results ??
    gameSeries?.results ??
    gameAdds?.results;

  if (!gamesAvailable) return;
  const title = allGames
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
      {!series && !additions && <h3>{title}:</h3>}
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
