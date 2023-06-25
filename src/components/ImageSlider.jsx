import React from 'react';
import { useGetGamesQuery } from '../services/getGamesApi';
import classes from './ImageSlider.module.css';
import { data1 } from '../sampleData/sample';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ImageSlider = ({ ratingClass, slideIn }) => {
  // const { data, isFetching } = useGetGamesQuery();

  // if (isFetching) return;

  // console.log(data?.results);

  return (
    <>
      <h3>Top Picks</h3>
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
          {data1?.results.map(game => (
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
                <button>See Details</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ImageSlider;
