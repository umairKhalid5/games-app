import React from 'react';
import { RotateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader">
      <RotateLoader color="#e58e27" size={15} />
    </div>
  );
};

export default Loader;
