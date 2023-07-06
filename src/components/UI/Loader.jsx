import React from 'react';
import { RotateLoader } from 'react-spinners';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <RotateLoader color="#e58e27" size={15} />
    </motion.div>
  );
};

export default Loader;
