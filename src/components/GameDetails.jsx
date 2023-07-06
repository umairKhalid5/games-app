import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './GameDetails.module.css';
import parse from 'html-react-parser';
import { Rating, Tooltip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import GameVideos from './GameVideos';
import {
  useGetGameByIDQuery,
  useGetGameDevTeamQuery,
} from '../services/getGamesApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Loader from './UI/Loader';
import GamesBox from './GamesBox';
import { platforms } from '../constants/constants';
import { motion } from 'framer-motion';

const GameDetails = ({
  ratingClass,
  // platforms,
  getDate,
  inversion,
  winSize,
  slideIn,
}) => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const [seeMore, setSeeMore] = useState(false);
  const params = useParams();

  const { data, isFetching } = useGetGameByIDQuery(params?.gameId ?? skipToken);
  const { data: gameDevs, isFetching: fetchingGameDevs } =
    useGetGameDevTeamQuery(params?.gameId ?? skipToken);

  if (isFetching || fetchingGameDevs) return <Loader />;

  const getFirstPara = str => {
    const paragraphs = str.split('</p>');
    const firstParagraph = paragraphs[0] + '</p>';
    return {
      para: parse(firstParagraph),
      length: firstParagraph.length,
    };
  };

  const getReaction = action => {
    if (action === 'exceptional') return 'Excellent';
    if (action === 'recommended') return 'Good';
    if (action === 'meh') return 'Average';
    if (action === 'skip') return 'Poor';
  };

  const strFromArr = arr =>
    arr.map((el, i) => (
      <span key={el?.id}>
        {el?.name}
        {i < arr?.length - 1 ? ', ' : ''}
      </span>
    ));

  const getRequirements = req =>
    data?.platforms
      .filter(plat => plat?.platform?.id === 4)
      .map(pc => pc?.requirements[req]);

  return (
    <motion.div
      className={classes.detailsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.image}>
        <img src={data?.background_image} alt={data?.name} />
      </div>
      <h2>{data?.name}</h2>
      <div className={classes.details}>
        {/* <div className={classes.mainWrapper}> */}
        {/* //? Left Section */}
        <div className={classes.left}>
          {/* <div> */}
          <p>
            Genre:
            {data?.genres.map((genre, i) => (
              <span key={i}>
                {genre?.name}
                {i < data?.genres.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p>
            Metacritic:
            <span
              className={ratingClass(data?.metacritic)}
              style={{ marginTop: '-3px' }}
            >
              {data?.metacritic}
            </span>
          </p>
          <p>
            Released:
            <span className={classes.date}>
              {getDate(data?.released)}
              {/* {data?.released} */}
            </span>
          </p>
          <p>
            Platforms:
            <span className={`${classes.platforms} flex`}>
              {platforms.map((entry, i) =>
                data?.parent_platforms?.map(
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
          </p>
          <p>
            Playtime:<span>{data?.playtime} hours</span>
          </p>
          <p>
            Rating:
            <Tooltip title={data?.rating} placement="right-start">
              <span>
                <Rating
                  name="read-only"
                  value={data?.rating}
                  readOnly
                  precision={0.1}
                />
              </span>
            </Tooltip>
          </p>
          <p>
            Total Votes:
            <span>{data?.ratings_count}</span>
          </p>
          {/* //? DESCRIPTION */}
          <div className={classes.descWrapper}>
            Description:
            <span className={classes.desc}>
              {!seeMore &&
                getFirstPara(data?.description.slice(0, 265) + '...').para}
              {seeMore && getFirstPara(data?.description).para}
              {getFirstPara(data?.description).length > 265 && (
                <button
                  className={classes.toggleBtn}
                  onClick={() => setSeeMore(prev => !prev)}
                >
                  See {seeMore ? 'Less' : 'More'}
                </button>
              )}
            </span>
          </div>
          {/* //? User Res's */}
          <div className={classes.ratingList}>
            User Responses:
            <ul role="list">
              {data?.ratings?.map(rating => (
                <li
                  key={rating?.id}
                  className={getReaction(rating?.title).toLowerCase()}
                >
                  <FiberManualRecordIcon />
                  <p>
                    {getReaction(rating?.title)}:<span>{rating?.percent}%</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Updated:
            <span>{getDate(data?.updated)}</span>
          </p>
          <p>
            Achievements:
            {<span>{data?.achievements_count}</span>}
          </p>
          <p>
            Website:
            <a onClick={() => window.open(data?.website)}>{data?.website}</a>
          </p>
          <p>Developers:{strFromArr(data?.developers)}</p>
          <p>Publishers:{strFromArr(data?.publishers)}</p>
          <p>
            Age Rating:<span>{data?.esrb_rating?.name}</span>
          </p>
          <p>
            Collections:
            <span>{data?.added}</span>
          </p>
          {/* </div> */}
        </div>

        {/* //?Right Side for Videos & SSs */}
        <div className={classes.right}>
          <GameVideos game={data} gameID={params?.gameId} winSize={winSize} />
        </div>
        {/* </div> */}
      </div>

      {/* //? Bottom Details */}
      <div className={classes.bottomDetails}>
        {/* //? SERIES */}
        {data?.game_series_count >= 1 && (
          <div>
            <h4>Other Games in the Series:</h4>
            <div className={classes.siblings}>
              <GamesBox
                slideIn={slideIn}
                ratingClass={ratingClass}
                winSize={winSize}
                platforms={platforms}
                getDate={getDate}
                inversion={inversion}
                series={data?.id}
                small
              />
            </div>
          </div>
        )}

        {/* //? ADDITIONS */}
        {data?.additions_count >= 1 && (
          <div>
            <h4>DLC's and Editions:</h4>
            <div className={classes.siblings}>
              <GamesBox
                slideIn={slideIn}
                ratingClass={ratingClass}
                winSize={winSize}
                platforms={platforms}
                getDate={getDate}
                inversion={inversion}
                additions={data?.id}
                small
              />
            </div>
          </div>
        )}
        {/* //? DEVS */}
        <h4>Team:</h4>
        <ul role="list" className={classes.devsInfo}>
          {gameDevs?.results.map(
            dev =>
              dev?.image && (
                <li key={dev?.id} className="flex">
                  <img src={dev?.image} alt={dev?.id} />
                  <p className="flex">
                    {dev?.name}
                    <span>({dev?.positions[0]?.name})</span>
                  </p>
                </li>
              )
          )}
        </ul>
        <h4>
          Platforms:
          <span>
            {data?.platforms.map(
              (plat, i, arr) =>
                `${plat.platform.name}${i < arr?.length - 1 ? ', ' : ''}`
            )}
          </span>
        </h4>
        <h4>
          PC Requirements:
          <strong>Minimum:</strong>
          <span>{getRequirements('minimum')}</span>
          <strong>Recommended:</strong>
          <span>{getRequirements('recommended')}</span>
        </h4>
        <h4>
          Tags:
          <span>{strFromArr(data?.tags)}</span>
        </h4>
      </div>
    </motion.div>
  );
};

export default GameDetails;
