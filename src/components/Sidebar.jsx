import React from 'react';
import classes from './Sidebar.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ theme, slideIn, setSlideIn }) => {
  const inversion = theme === 'light' ? '0%' : '100%';

  const platforms = [
    { logo: 'src/assets/windows.png', name: 'PC', id: 1 },
    { logo: 'src/assets/playstation.png', name: 'Playstation', id: 2 },
    { logo: 'src/assets/xbox.png', name: 'Xbox', id: 3 },
    { logo: 'src/assets/nintendo.png', name: 'Nintendo', id: 7 },
  ];

  const genres = [
    { name: 'Action', id: 4 },
    { name: 'Indie', id: 51 },
    { name: 'Adventure', id: 3 },
    { name: 'RPG', id: 5 },
    { name: 'Strategy', id: 10 },
    { name: 'Shooter', id: 2 },
    { name: 'Casual', id: 40 },
    { name: 'Simulation', id: 14 },
    { name: 'Puzzle', id: 7 },
    { name: 'Arcade', id: 11 },
    { name: 'Platformer', id: 83 },
    { name: 'Massively Multiplayer', id: 59 },
    { name: 'Racing', id: 1 },
    { name: 'Sports', id: 15 },
    { name: 'Fighting', id: 6 },
    { name: 'Family', id: 19 },
    { name: 'Board Games', id: 28 },
    { name: 'Educational', id: 34 },
    { name: 'Card', id: 17 },
  ];

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
            X
          </button>
          <ul role="list" className={classes.list}>
            {platforms.map(platform => (
              <li key={platform.name} className="flex">
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
            ))}
          </ul>
          <h3>Genres</h3>
          <ul role="list" className={classes.list}>
            {genres.map(platform => (
              <li key={platform.name} className="flex">
                <p>{platform.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {!slideIn && (
        <div>
          <MenuIcon
            onClick={() => {
              setSlideIn(true);
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            sx={{
              background: '#e58e27',
              background: '#e58e27',
              color: theme === 'dark' ? '#f5fbfb' : '#161a1e',
              cursor: 'pointer',
              padding: '0.2rem',
              height: '28px',
              width: '28px',
              position: 'fixed',
              top: '4.8rem',
              right: '1rem',
              zIndex: 1,
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(229, 142, 39, 0.35)',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
