import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, nomeMappa, setNomeMappa }) => {
  const { progress, url } = useStorage(file, nomeMappa);

  useEffect(() => {
    if (url) {
      setFile(null);
      setNomeMappa("")
    }
  }, [url, setFile, setNomeMappa]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;