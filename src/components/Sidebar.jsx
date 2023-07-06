import React from 'react';
import classes from './Sidebar.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import { genres, platforms } from '../constants/constants';

const Sidebar = ({ theme, slideIn, setSlideIn }) => {
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
                to={`/platform/${platform.id}?page=1`}
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
            <NavLink
              className={navData => (navData.isActive ? 'active' : '')}
              to="/all-games?page=1"
              key="all-key"
              onClick={() => setSlideIn(false)}
            >
              <li className="flex">
                <p>All Games</p>
              </li>
            </NavLink>
            {genres.map(platform => (
              <NavLink
                className={navData => (navData.isActive ? 'active' : '')}
                // to={`/genre/${platform?.name.toLocaleLowerCase()}`}
                to={`/genre/${platform?.id}?page=1`}
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
    </div>
  );
};

export default Sidebar;
