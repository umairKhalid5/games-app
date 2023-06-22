import React from 'react';
import { useGetGamesQuery } from '../services/getGamesApi';
import classes from './ImageSlider.module.css';
import { data1 } from '../sampleData/sample';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ImageSlider = () => {
  const data = data1;
  // const { data, isFetching } = useGetGamesQuery();

  // if (isFetching) return;

  // console.log(data?.results);

  return (
    <>
      <h3>Top Picks</h3>
      <div className={classes.carouselContainer}>
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
            <div key={game.id}>
              <img src={game.background_image} />
              <p className="legend">{game.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ImageSlider;
