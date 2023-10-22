import { Skeleton } from '@mui/material';
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      src={src}
      className={className || ''}
      alt=""
      effect="opacity"
    />
  );
};

export default Img;
