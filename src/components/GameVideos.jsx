import React, { useEffect, useState } from 'react';
import classes from './GameVideos.module.css';
import { yTGTrailers } from '../sampleData/sample';
import { gameVids } from '../sampleData/sample';
import ReactPlayer from 'react-player';
import { useGetGameTrailersQuery } from '../services/getGamesApi';
import { Carousel } from 'react-responsive-carousel';

const url = 'https://youtube-v31.p.rapidapi.com/search';
const options = {
  url: url,
  headers: {
    'X-RapidAPI-Key': '5c8d2488ccmsh8d348500874bcc6p14e2c6jsne5f20f854132',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const GameVideos = ({ game, gameID, winSize }) => {
  //   const { data, isFetching } = useGetGameTrailersQuery(gameID);

  const [yTtrailers, setYTTrailers] = useState(yTGTrailers);
  //   console.log(yTGTrailers);

  // ? Code to get Video Trailers from Youtube
  //   useEffect(() => {
  //     const fetchTrailer = async () => {
  //       const res = await fetch(
  //         `${url}?q=${game} trailer&part=snippet&maxResults=3`,
  //         options
  //       );
  //       const data = await res.json();
  //       console.log(data?.items);
  //       setTrailer(data?.items)
  //     };

  //     try {
  //       fetchTrailer();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  //   if (isFetching) return;
  //   console.log(data);

  return (
    <div className={classes.videosContainer}>
      {/* //? TRAILERS */}
      <h3>Trailers</h3>
      <div className={classes.trailers}>
        <Carousel
          infiniteLoop
          //   autoPlay
          swipeable
          emulateTouch
          useKeyboardArrows
          width="100%"
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={70}
        >
          {yTtrailers.map(trailer => (
            <ReactPlayer
              key={trailer.id?.videoId}
              url={`https://www.youtube.com/watch?v=${trailer?.id?.videoId}`}
              className="react-player"
              controls
            />
          ))}
        </Carousel>
      </div>
      {/* //? GAMEPLAY */}
      <h3>Gameplay Videos</h3>
      <div className={classes.videos}>
        <Carousel
          infiniteLoop
          autoPlay
          swipeable
          emulateTouch
          useKeyboardArrows
          width="100%"
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={40}
          selectedItem={2}
          showStatus={false}
        >
          {gameVids?.results?.map(video => (
            <ReactPlayer
              key={video?.id}
              url={video?.data['480']}
              className="react-player"
              light={video?.preview}
              controls
            />
          ))}
        </Carousel>
      </div>
      {/* //? SSs */}
      <h3>Screen Shots</h3>
      <h3>Buy From</h3>
    </div>
  );
};

export default GameVideos;
