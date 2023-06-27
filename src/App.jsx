import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

function App() {
  const [theme, setTheme] = useState('light');
  const [slideIn, setSlideIn] = useState(true);
  const [winSize, setWinSize] = useState(window.innerWidth);

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
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} setSlideIn={setSlideIn} />
      <main className="main">
        <Sidebar theme={theme} slideIn={slideIn} setSlideIn={setSlideIn} />
        <Layout theme={theme} slideIn={slideIn} winSize={winSize} />
      </main>
    </>
  );
}

export default App;
