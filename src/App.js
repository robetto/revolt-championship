import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Classifica from "./pages/Classifica";
import Partite from "./pages/Partite";
import StoricoPartite from "./pages/StoricoPartite";
import ListaMappe from "./components/ListaMappe";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/partite" element={<Partite />} /> 
          <Route path="/classifica" element={<Classifica />} />
          <Route path="/elenco" element={<StoricoPartite />} />
          <Route path="/mappe" element={<ListaMappe />} />
        </Routes>
        {/* <div className="App">
        <Autocomplete
          suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
        />
        <UploadMappa />
        <ListaMappe setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div> */}
      </AnimatePresence>
    </>
  );
}

export default App;
