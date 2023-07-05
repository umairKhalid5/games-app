import React from 'react';
import classes from './Sidebar.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NavLink } from 'react-router-dom';
import { genres } from '../constants/constants';

const Sidebar = ({ theme, slideIn, setSlideIn, platforms }) => {
  const inversion = theme === 'light' ? '0%' : '100%';

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
              <NavLink
                className={navData => (navData.isActive ? 'active' : '')}
                to={`/platform/${platform.id}`}
                key={platform.name}
                onClick={() => setSlideIn(false)}
              >
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
              </NavLink>
            ))}
          </ul>
          <h3>Genres</h3>
          <ul role="list" className={classes.list}>
            {genres.map(platform => (
              <NavLink
                className={navData => (navData.isActive ? 'active' : '')}
                // to={`/genre/${platform?.name.toLocaleLowerCase()}`}
                to={`/genre/${platform?.id}`}
                key={platform.name}
                onClick={() => setSlideIn(false)}
              >
                <li className="flex">
                  <p>{platform.name}</p>
                </li>
              </NavLink>
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
