import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const ListaMappe = ({ setSelectedImg }) => {
  const { docs } = useFirestore("mappe");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
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
  );
};

export default ListaMappe;
