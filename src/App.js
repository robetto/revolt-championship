import { useState } from "react";
import ListaMappe from "./components/ListaMappe";
import Modal from "./components/Modal";
import UploadMappa from "./components/UploadMappa";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <UploadMappa />
      <ListaMappe setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
