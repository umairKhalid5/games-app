import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

function App() {
  const [theme, setTheme] = useState('light');
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (theme === 'dark') document.body.className = 'dark';
    if (theme === 'light') document.body.className = 'light';
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="main">
        <Sidebar theme={theme} slideIn={slideIn} setSlideIn={setSlideIn} />
        <Layout theme={theme} slideIn={slideIn} />
      </main>
    </>
  );
}

export default App;
