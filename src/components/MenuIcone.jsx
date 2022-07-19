import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GiBlackBook, GiRank3, GiSave, GiHorizonRoad } from "react-icons/gi";

const MenuIcone = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "app-sidebar-link active" : "app-sidebar-link"
        }
        to="/classifica"
      >
        <GiRank3 />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "app-sidebar-link active" : "app-sidebar-link"
        }
        to="/partite"
      >
        <GiSave />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "app-sidebar-link active" : "app-sidebar-link"
        }
        to="/elenco"
      >
        <GiBlackBook />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "app-sidebar-link active" : "app-sidebar-link"
        }
        to="/mappe"
      >
        <GiHorizonRoad />
      </NavLink>
    </>
  );
};

export default MenuIcone;
