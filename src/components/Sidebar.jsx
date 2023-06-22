import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = ({ theme }) => {
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
    <div className={classes.sidebarContainer}>
      <h3>Platforms</h3>
      <ul role="list" className={classes.list}>
        {platforms.map(platform => (
          <li key={platform.name} className="flex">
            <div>
              <img
                src={platform.logo}
                alt=""
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
    </div>
  );
};

export default Sidebar;
