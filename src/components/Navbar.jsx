import React, { useEffect, useState } from 'react';
// import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SuggestionsBox from './SuggestionsBox';

const Navbar = ({ theme, setTheme, setSlideIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim().length > 0) setShowSuggestions(true);
    else setShowSuggestions(false);
  };

  useEffect(() => {
    const hideSuggestionBox = e => {
      if (
        !e.target?.closest('div')?.classList?.contains('suggestionsList') &&
        !e.target?.closest('div')?.classList?.contains('searchBar') &&
        !e.target?.classList?.contains('light-dark-mode')
      ) {
        setShowSuggestions(false);
      }
    };

    window.addEventListener('click', hideSuggestionBox);

    return () => {
      window.removeEventListener('click', hideSuggestionBox);
    };
  }, [showSuggestions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSuggestions) setShowResults(true);
      else setShowResults(false);
    }, 400);

    return () => {
      clearTimeout(timer);
      setShowResults(false);
    };
  }, [showSuggestions, searchTerm]);

  return (
    <nav className="navbar flex">
      <div className="menuBtn flex">
        <MenuIcon
          onClick={() => {
            setSlideIn(prev => !prev);
            // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          sx={{
            color: '#e58e27',
            cursor: 'pointer',
          }}
        />
      </div>
      <div>
        <Link to="/" className="flex" onClick={() => setSlideIn(false)}>
          <h4>GTRON</h4>
        </Link>
      </div>

      <div className="searchBar">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search games"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="icon">
            <SearchIcon sx={{ cursor: 'pointer' }} />
          </button>
        </form>
        {showSuggestions && showResults && (
          <SuggestionsBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setShowSuggestions={setShowSuggestions}
          />
        )}
      </div>

      <div className="light-dark-mode" onClick={toggleTheme}>
        {theme === 'light' && (
          <DarkModeIcon style={{ pointerEvents: 'none' }} />
        )}
        {theme === 'dark' && (
          <LightModeIcon style={{ pointerEvents: 'none' }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
