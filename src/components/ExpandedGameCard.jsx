import React from 'react';
import classes from './ExpandedGameCard.module.css';
import { Rating, Tooltip } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExpandedGameCard = ({
  game,
  getDate,
  inversion,
  platforms,
  ratingClass,
  onClose,
  winSize,
}) => {
  const navigate = useNavigate();
  const detailsHandler = id => {
    navigate(`/details/${id}`);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${classes.expandedCard} flex`}>
        <div className={classes.left}>
          <img src={game?.background_image} alt={game?.name} />
          <button onClick={() => detailsHandler(game?.id)}>See Details</button>
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
          <div>
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
            <p>
              Total Votes:
              <span>{game?.ratings_count}</span>
            </p>
            <p>
              Collections:
              <span>{game?.added}</span>
            </p>
          </div>
        </div>
        <button className={classes.backBtn} onClick={() => onClose()}>
          Go back
        </button>
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
            centerSlidePercentage={winSize > 950 ? 35 : winSize < 450 ? 50 : 35}
            selectedItem={2}
            showStatus={false}
          >
            {game?.short_screenshots.map(ss => (
              <img key={ss?.id} src={ss?.image} alt="img" loading="lazy" />
            ))}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedGameCard;
