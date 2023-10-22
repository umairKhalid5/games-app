import React from 'react';
import { useGetGamesQuery } from '../services/getGamesApi';
import classes from './ImageSlider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Loader from './UI/Loader';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from './UI/Image';

const ImageSlider = ({ ratingClass, slideIn }) => {
  const navigate = useNavigate();
  const { data, isFetching } = useGetGamesQuery(1);

  if (isFetching) return <Loader />;

  const detailsHandler = id => navigate(`/details/${id}`);

  return (
    <>
      <h3>Top Picks:</h3>
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0' }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.carouselContainer}>
          <Carousel
            infiniteLoop
            autoPlay
            swipeable
            emulateTouch
            useKeyboardArrows
            width="100%"
            showThumbs={false}
            showStatus={false}
          >
            {data?.results?.slice(0, 10).map(game => (
              <div key={game?.id}>
                {/* <img src={game?.background_image} alt={game?.name} /> */}
                <Image src={game?.background_image} alt={game?.name} />
                <p className={classes.title}>{game?.name}</p>
                <div className={classes?.details}>
                  <p>
                    Metacritic:{' '}
                    <span className={ratingClass(game?.metacritic)}>
                      {game?.metacritic}
                    </span>
                  </p>
                  <p>
                    {game?.genres.map(
                      (genre, i) =>
                        `${genre?.name}${
                          i < game?.genres.length - 1 ? ', ' : ''
                        }`
                    )}
                  </p>
                </div>
                <div className={classes?.moreBtn}>
                  <button onClick={() => detailsHandler(game?.id)}>
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </>
  );
};

export default ImageSlider;
