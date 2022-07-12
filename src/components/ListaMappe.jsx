import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import UploadMappa from "../components/UploadMappa";
import { containerVariants } from "../animazioni";

const ListaMappe = () => {
  const { docs } = useFirestore("mappe");

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <UploadMappa />
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <div className="nome__mappa">
                <h2>{doc.nome}</h2>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default ListaMappe;
