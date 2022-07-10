import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/partite">Registra match</Link>
          <Link to="/classifica">Classifica</Link>
          <Link to="/elenco">Storico partite</Link>
        </nav>
      </div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Revolt</h1>
      </motion.div>
    </header>
  );
};

export default Header;
