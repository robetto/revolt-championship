import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import UploadMappa from '../components/UploadMappa'

const ListaMappe = () => {
  const { docs } = useFirestore("mappe");

  return (
    <div className="container">
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
              <p>asdasda</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ListaMappe;
