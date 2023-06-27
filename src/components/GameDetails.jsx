import React from 'react';
import { useParams } from 'react-router-dom';
import { singleGame as data } from '../sampleData/sample';
import classes from './GameDetails.module.css';
import parse from 'html-react-parser';
import { Rating, Tooltip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const GameDetails = ({ ratingClass, platforms, getDate, inversion }) => {
  const params = useParams();
  //   console.log(params?.gameId);

  const getFirstPara = str => {
    const paragraphs = str.split('</p>');
    const firstParagraph = paragraphs[0] + '</p>';
    return parse(firstParagraph);
  };

  const getReaction = action => {
    if (action === 'exceptional') return 'Excellent';
    if (action === 'recommended') return 'Good';
    if (action === 'meh') return 'Average';
    if (action === 'skip') return 'Poor';
  };

  return (
    <div className={classes.detailsContainer}>
      <div className={classes.image}>
        <img src={data?.background_image} alt={data?.name} />
      </div>
      <h2>{data?.name}</h2>
      <div className={classes.details}>
        {/* <div className={classes.mainWrapper}> */}
        <div className={classes.left}>
          <span className={classes.desc}>
            {getFirstPara(data?.description)}
          </span>
          <div>
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
                      {getReaction(rating?.title)}:
                      <span>{rating?.percent}%</span>
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
              {/* <span>{data?.website}</span> */}
              <a onClick={() => window.open(data?.website)}>Visit Website</a>
            </p>
            <p>
              Developers:
              {data?.developers.map((dev, i) => (
                <span key={dev?.id}>
                  {dev?.name}
                  {i < data?.developers?.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p>
              Age Rating:<span>{data?.esrb_rating?.name}</span>
            </p>
            <p>
              Collections:
              <span>{data?.added}</span>
            </p>
          </div>
        </div>

        {/* //?Right Side for Videos & SSs */}
        <div className={classes.right}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          maxime.
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default GameDetails;
