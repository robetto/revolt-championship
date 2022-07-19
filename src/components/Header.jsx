import React from "react";
import { motion } from "framer-motion";
import DarkMode from "./DarkMode";
import { FiLogIn, FiLogOut, FiBellOff } from "react-icons/fi";

const Header = () => { 
  return (
    <div className="app-header">
      <div className="app-header-left">
        <motion.div
          className="app-title"
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 220 }}
        >
          ReVolt
        </motion.div>
        <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="Cerca..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
      </div>
      <div className="app-header-right">
        <DarkMode />
        <button>
          <FiBellOff />
        </button>
        <button>
          <FiLogIn />
        </button>
        <button>
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
