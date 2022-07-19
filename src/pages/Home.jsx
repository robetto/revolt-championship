import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../animazioni";
import MenuIcone from "../components/MenuIcone";
import ListaMappe from "../components/ListaMappe";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Messaggi from "../components/messaggi/Messaggi";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <div className="app-sidebar">
          <MenuIcone />
        </div>
        <div className="projects-section">
          <div className="projects-section-header">
            <p>Mappe</p>
            <p className="time">
              {new Date().toLocaleString("it-IT", {
                weekday: "long",
                month: "2-digit",
                day: "2-digit",
              }) + ""}
            </p>
          </div>
          <Stats />

          <Outlet />
          <ListaMappe />
        </div>
        
        <Messaggi />

      </div>
    </div>
  );
};

export default Home;
