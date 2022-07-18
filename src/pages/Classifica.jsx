import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { motion } from "framer-motion";
import { containerVariants } from "../animazioni";

const Classifica = () => {
  const [tutteLePartite, setTutteLePartite] = useState([]);
  const [puntiRoby, setPuntiRoby] = useState(0);

  const colRef = collection(projectFirestore, "partite");

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let partiteArray = [];

      snapshot.docs.forEach((doc) => {
        partiteArray.push({ ...doc.data(), id: doc.id });
      });
      setTutteLePartite(partiteArray);
    });
    return () => unsubscribe();
  }, []);

  function getSum(total, num) {
    return total + num;
  }
  console.log(tutteLePartite);

  const totalePuntiRoby = tutteLePartite.reduce((accumulator, object) => {
    return (accumulator + parseFloat(object.posRoby.replace(",", "."))) ;
  }, 0);
  const totalePuntiDany = tutteLePartite.reduce((accumulator, object) => {
    return (accumulator + parseFloat(object.posDany.replace(",", "."))) ;
  }, 0);
  const totalePuntiBoffy = tutteLePartite.reduce((accumulator, object) => {
    return (accumulator + parseFloat(object.posBoffy.replace(",", "."))) ;
  }, 0);
  const totalePuntiMalsana = tutteLePartite.reduce((accumulator, object) => {
    return (accumulator + parseFloat(object.posMalsana.replace(",", "."))) ;
  }, 0);

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="classifica"> 
          <div>Roby: {totalePuntiRoby.toFixed(2)}</div>
          <div>Dany: {totalePuntiDany.toFixed(2)}</div>
          <div>Boffy: {totalePuntiBoffy.toFixed(2)}</div>
          <div>Malsana: {totalePuntiMalsana.toFixed(2)}</div>
      </div>
    </motion.div>
  );
};

export default Classifica;
