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
        `${url}?q=${game?.name} trailer&part=snippet&maxResults=3`,
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
    <>
      <div className={classes.videosContainer}>
        {/* //? TRAILERS */}
        {/* {yTtrailers.length > 0 && (
        <>
          <h3>Trailers</h3>
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
      )} */}
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
                  <img
                    key={ss?.id}
                    src={ss?.image}
                    alt="game_ss"
                    loading="lazy"
                  />
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
        <Modal onClose={() => setShowExpandedImg(false)}>
          <div className={classes.expandedImg}>
            <img src={imageSrc} alt="img" loading="lazy" />
            <div onClick={() => setShowExpandedImg(false)}>
              <CloseIcon />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default GameVideos;
