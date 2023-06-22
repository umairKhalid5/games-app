import React from 'react';
// import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };
  return (
    <nav className="navbar flex">
      <div>
        <Link to="/" className="flex">
          {/* <img src={logo} alt="" /> */}
          <h4>GTRON</h4>
        </Link>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Search games" />
      </div>

      <div className="light-dark-mode" onClick={toggleTheme}>
        {theme === 'light' && <DarkModeIcon />}
        {theme === 'dark' && <LightModeIcon />}
      </div>
    </nav>
  );
};

export default Navbar;
