import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTopBtn = () => {
  return (
    <button
      className="topBtn"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <ArrowUpwardIcon />
    </button>
  );
};

export default ScrollTopBtn;
