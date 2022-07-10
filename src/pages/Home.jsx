import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../animazioni";

const Home = () => {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>Home</div>
    </motion.div>
  );
};

export default Home;
