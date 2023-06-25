import React from 'react';
import classes from './ExpandedGameCard.module.css';
import { Rating, Tooltip } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

const ExpandedGameCard = ({
  game,
  getDate,
  inversion,
  platforms,
  ratingClass,
}) => {
  return (
    <>
      <div className={`${classes.expandedCard} flex`}>
        <div className={classes.left}>
          <img src={game?.background_image} alt={game?.name} />
          <button>See Details</button>
          <p>
            Rating:
            <Tooltip title={game?.rating} placement="right-start">
              <span>
                <Rating
                  name="read-only"
                  value={game?.rating}
                  readOnly
                  precision={0.1}
                />
              </span>
            </Tooltip>
          </p>
        </div>
        <div className={classes.right}>
          <h3>{game?.name}</h3>
          <p className={classes.genre}>
            {game?.genres.map(
              (genre, i) =>
                `${genre?.name}${i < game?.genres.length - 1 ? ' | ' : ''}`
            )}
          </p>
          <p>
            Metacritic:
            <span
              className={ratingClass(game?.metacritic)}
              style={{ marginTop: '-3px' }}
            >
              {game?.metacritic}
            </span>
          </p>
          <p>
            Released:
            <span className={classes.date}>{getDate(game?.released)}</span>
          </p>
          <p>
            Platforms:
            <span className={`${classes.platforms} flex`}>
              {platforms.map((entry, i) =>
                game?.parent_platforms?.map(
                  pt =>
                    pt?.platform?.id === entry.id && (
                      <img
                        key={entry.id}
                        src={entry.logo}
                        alt={entry.name}
                        style={{
                          filter: `invert(1)`,
                        }}
                      />
                    )
                )
              )}
            </span>
          </p>
          <p>
            Playtime:<span>{game?.playtime} hours</span>
          </p>
          {/* <p>
          {game?.tags.map(
              (tag, i) => `${tag?.name}${i < game?.tags.length - 1 ? ', ' : ''}`
              )}
            </p> */}
          <p>
            Total Votes:
            <span>{game?.ratings_count}</span>
          </p>
          <p>
            Collections:
            <span>{game?.added}</span>
          </p>
          {/* <p>
            Age Rating:<span>{game?.esrb_rating?.name}</span>
          </p> */}
        </div>
        <button className={classes.backBtn}>Go back</button>
      </div>
      <div className={`${classes.screenShots} flex`}>
        <div className={classes.carouselWrapper}>
          <Carousel
            infiniteLoop
            autoPlay
            swipeable
            emulateTouch
            useKeyboardArrows
            width="100%"
            showThumbs={false}
            centerMode={true}
            centerSlidePercentage={25}
            selectedItem={2}
            showStatus={false}
          >
            {game?.short_screenshots.map(ss => (
              <img key={ss?.id} src={ss?.image} alt="img" loading="lazy" />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ExpandedGameCard;
