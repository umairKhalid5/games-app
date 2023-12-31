import React, { useEffect, useState } from 'react';
import classes from './GameVideos.module.css';
import ReactPlayer from 'react-player';
import {
  useGetGameScreenShotsQuery,
  useGetGameTrailersQuery,
} from '../services/getGamesApi';
import { Carousel } from 'react-responsive-carousel';
import Modal from './UI/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Image from './UI/Image';

const yTKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const url = 'https://youtube-v31.p.rapidapi.com/search';
const options = {
  url: url,
  headers: {
    'X-RapidAPI-Key': yTKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const GameVideos = ({ game, gameID, winSize }) => {
  const [yTtrailers, setYTTrailers] = useState([]);
  const [imageSrc, setImageSrc] = useState('');
  const [showExpandedImg, setShowExpandedImg] = useState(false);

  const { data: gameVids, isFetching: fetchingGameVids } =
    useGetGameTrailersQuery(gameID);
  const { data: gameSs, isFetching: fetchingGameSs } =
    useGetGameScreenShotsQuery(gameID);

  //   console.log(yTGTrailers);

  // ? Code to get Video Trailers from Youtube
  useEffect(() => {
    const fetchTrailer = async () => {
      const res = await fetch(
        `${url}?q=${game?.name} game trailer&part=snippet&maxResults=3`,
        options
      );
      const data = await res.json();
      setYTTrailers(data?.items);
    };

    try {
      fetchTrailer();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const showImage = item => {
    setImageSrc(item?.props?.src);
    setShowExpandedImg(true);
  };

  if (fetchingGameVids || fetchingGameSs) return;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div
        className={classes.videosContainer}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ delay: 0.5, duration: 1 }}
      >
        {/* //? TRAILERS */}
        {yTtrailers.length > 0 && (
          <>
            <h3>Trailers and Videos</h3>
            <div>
              <Carousel
                infiniteLoop
                //   autoPlay
                swipeable
                // emulateTouch
                useKeyboardArrows
                width="100%"
                showThumbs={false}
                centerMode={winSize > 480 ? true : false}
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
          </>
        )}
        {/* //? GAMEPLAY */}
        {gameVids?.results?.length > 0 && (
          <>
            <h3>Gameplay Videos</h3>
            <div>
              <Carousel
                infiniteLoop
                // autoPlay
                swipeable
                // emulateTouch
                useKeyboardArrows
                width="100%"
                showThumbs={false}
                // centerMode={true}
                // centerSlidePercentage={40}
                centerMode={winSize > 480 ? true : false}
                centerSlidePercentage={50}
                selectedItem={2}
              >
                {gameVids?.results?.map(video => (
                  <ReactPlayer
                    key={video?.id}
                    url={video?.data.max}
                    className="react-player"
                    light={video?.preview}
                    controls
                  />
                ))}
              </Carousel>
            </div>
          </>
        )}
        {/* //? SSs */}
        {gameSs?.results?.length > 0 && (
          <>
            <h3>Screen Shots</h3>
            <div className={classes.screenShots}>
              <Carousel
                infiniteLoop
                autoPlay
                swipeable
                // emulateTouch
                useKeyboardArrows
                width="100%"
                showThumbs={false}
                // centerMode={true}
                // centerSlidePercentage={40}
                centerMode={winSize > 480 ? true : false}
                centerSlidePercentage={50}
                selectedItem={2}
                onClickItem={(_, item) => showImage(item)}
              >
                {gameSs?.results?.map(ss => (
                  // <img
                  //   key={ss?.id}
                  //   src={ss?.image}
                  //   alt="game_ss"
                  //   loading="lazy"
                  // />
                  <Image key={ss?.id + '1'} src={ss?.image} />
                ))}
              </Carousel>
            </div>
          </>
        )}
        {/* //? Stores */}
        <h3>Buy From</h3>
        <div className={classes.stores}>
          {game?.stores?.map(store => (
            <button
              key={store?.id}
              onClick={() => window.open(`https://${store?.store?.domain}`)}
            >
              {store?.store?.name}
            </button>
          ))}
        </div>
      </div>

      {showExpandedImg && (
        <Modal onClose={() => setShowExpandedImg(false)} center noPadding>
          <motion.div
            className={classes.expandedImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={imageSrc} />
            <div onClick={() => setShowExpandedImg(false)}>
              <CloseIcon />
            </div>
          </motion.div>
        </Modal>
      )}
    </motion.div>
  );
};

export default GameVideos;
