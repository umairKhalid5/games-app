import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import ScrollTopBtn from './components/ScrollTopBtn';

function App() {
  const selectedTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'light';

  const [theme, setTheme] = useState(selectedTheme);
  const [slideIn, setSlideIn] = useState(false);
  const [winSize, setWinSize] = useState(window.innerWidth);

  // const platforms = [
  //   { logo: '/assets/windows.png', name: 'PC', id: 1 },
  //   { logo: '/assets/playstation.png', name: 'Playstation', id: 2 },
  //   { logo: '/assets/xbox.png', name: 'Xbox', id: 3 },
  //   { logo: '/assets/nintendo.png', name: 'Nintendo', id: 7 },
  // ];

  useEffect(() => {
    const updateWindowSize = () => {
      const size = window.innerWidth;
      setWinSize(size);
    };
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (theme === 'dark') document.body.className = 'dark';
    if (theme === 'light') document.body.className = 'light';
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} setSlideIn={setSlideIn} />
      <main className="main">
        <Sidebar
          theme={theme}
          slideIn={slideIn}
          setSlideIn={setSlideIn}
          // platforms={platforms}
        />
        <Layout
          theme={theme}
          slideIn={slideIn}
          winSize={winSize}
          // platforms={platforms}
        />
        <ScrollTopBtn />
      </main>
    </>
  );
}

export default App;

//? Pagination & darkMode-LocalStorage added
