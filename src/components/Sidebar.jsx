import React from 'react';
import classes from './Sidebar.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-router-dom';
import { genres } from '../constants/constants';

const Sidebar = ({ theme, slideIn, setSlideIn, platforms }) => {
  const inversion = theme === 'light' ? '0%' : '100%';

  // const platforms = [
  //   { logo: 'src/assets/windows.png', name: 'PC', id: 1 },
  //   { logo: 'src/assets/playstation.png', name: 'Playstation', id: 2 },
  //   { logo: 'src/assets/xbox.png', name: 'Xbox', id: 3 },
  //   { logo: 'src/assets/nintendo.png', name: 'Nintendo', id: 7 },
  // ];

  return (
    <div
      className={`${classes.sidebarContainer} ${
        slideIn ? classes.show : classes.hide
      }`}
    >
      {slideIn && (
        <>
          <h3>Platforms</h3>
          <button
            className={classes.closeSidebarBtn}
            onClick={() => setSlideIn(false)}
          >
            <ArrowBackIcon />
          </button>
          <ul role="list" className={classes.list}>
            {platforms.map(platform => (
              <Link to={`/platform/${platform.id}`} key={platform.name}>
                <li className="flex">
                  <div>
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      style={{
                        filter: `invert(${inversion})`,
                      }}
                    />
                  </div>
                  <p>{platform.name}</p>
                </li>
              </Link>
            ))}
          </ul>
          <h3>Genres</h3>
          <ul role="list" className={classes.list}>
            {genres.map(platform => (
              <Link
                // to={`/genre/${platform?.name.toLocaleLowerCase()}`}
                to={`/genre/${platform?.id}`}
                key={platform.name}
              >
                <li className="flex">
                  <p>{platform.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
      <button
        className={classes.topBtn}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
};

export default Sidebar;
