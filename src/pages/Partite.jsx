import React, { useState } from "react";
import AddPartita from "../components/partite/AddPartita";
import StoricoPartite from "./StoricoPartite";

const Partite = () => {
  const [partitaId, setPartitaId] = useState("");

  const getPartitaIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setPartitaId(id);
  };

  return (
    <>
      <div className="partite">
        <AddPartita id={partitaId} setPartitaId={setPartitaId} />
      </div>

      <StoricoPartite getPartitaId={getPartitaIdHandler} />
    </>
  );
};

export default Partite;
