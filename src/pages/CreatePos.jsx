import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "../animazioni";

function CreatePos() {
  const listaMappe = ["Apple", "Mango", "Airplane"];
  const [fList, setFlist] = useState([]);  
  const [posizionamento, setPosizionamento] = useState("");
  const [idMappa, setIdMappa] = useState("");

  const tempiCollectionRef = collection(projectFirestore, "posizionamenti");
  let navigate = useNavigate();

  const createPos = async () => {
    await addDoc(tempiCollectionRef, {
      posizionamento,
      idMappa: idMappa,
      idPilota: 1,
    });
    navigate("/");
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="createPosPage">
        <div className="cpContainer">
          <h1>Posizionamento</h1>
          <div className="inputGp">
            <label> Mappa:</label>
            <input
              placeholder="Mappa..."
              onChange={(event) => {
                setIdMappa(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Posizionamento:</label>
            <input
              placeholder="Posizionamento"
              onChange={(event) => {
                setPosizionamento(event.target.value);
              }}
            />
          </div>
          <button onClick={createPos}> Invia</button>
        </div>
      </div>
    </motion.div>
  );
}

export default CreatePos;
