import React from 'react';
import { useGetGamesQuery } from '../services/getGamesApi';
import classes from './ImageSlider.module.css';
import { data1 } from '../sampleData/sample';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Loader from './UI/Loader';
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ ratingClass, slideIn }) => {
  const navigate = useNavigate();
  const { data, isFetching } = useGetGamesQuery();

  if (isFetching) return <Loader />;

  const detailsHandler = id => navigate(`/details/${id}`);

  return (
    <>
      <h3>Top Picks:</h3>
      <div
        className={`${classes.carouselContainer} ${
          slideIn ? classes.hideInfo : ''
        }`}
      >
        <Carousel
          infiniteLoop
          autoPlay
          swipeable
          emulateTouch
          useKeyboardArrows
          width="100%"
          showThumbs={false}
        >
          {data?.results.map(game => (
            <div key={game?.id}>
              <img src={game?.background_image} alt={game?.name} />
              <p className={classes.title}>{game?.name}</p>
              <div className={classes?.details}>
                {/* <p>Playtime: {game?.playtime} hours</p> */}
                <p>
                  Metacritic:{' '}
                  <span className={ratingClass(game?.metacritic)}>
                    {game?.metacritic}
                  </span>
                </p>
                <p>
                  {game?.genres.map(
                    (genre, i) =>
                      `${genre?.name}${i < game?.genres.length - 1 ? ', ' : ''}`
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
    </>
  );
};

export default ImageSlider;
