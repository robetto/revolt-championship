import React, { useState } from "react";
import AddPartita from "../components/partite/AddPartita";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { containerVariants } from "../animazioni";

const Partite = () => {
  const [partitaId, setPartitaId] = useState("");

  const getPartitaIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setPartitaId(id);
  };

  const { docs } = useFirestore("mappe");
  const listaMappe = [];
  for (var i of docs) {
    listaMappe.push(i.nome);
    console.log(listaMappe);
  }

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="partite">
        <AddPartita
          id={partitaId}
          setPartitaId={setPartitaId}
          listaMappe={listaMappe}
        />
      </div>
    </motion.div>
  );
};

export default Partite;
