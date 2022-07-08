import { useState } from "react";
import Autocomplete from "./components/Autocomplete";
import ListaMappe from "./components/ListaMappe";
import Modal from "./components/Modal";
import UploadMappa from "./components/UploadMappa";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; 
import Classifica from "./pages/Classifica";
import CreatePos from "./pages/CreatePos";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aggiungi">Aggiungi</Link>
        <Link to="/classifica">Classifica</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aggiungi" element={<CreatePos />} />
        <Route path="/classifica" element={<Classifica />} />
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
    </Router>
  );
}

export default App;
