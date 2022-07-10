import { projectFirestore } from "./config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const partitaCollectionRef = collection(projectFirestore, "partite");

class PartitaDataService {
  addPartite = (nuovaPartita) => {
    return addDoc(partitaCollectionRef, nuovaPartita);
  };

  updatePartita = (id, updatedPartita) => {
    const partitaDoc = doc(projectFirestore, "partite", id);
    return updateDoc(partitaDoc, updatedPartita);
  };

  deletePartita = (id) => {
    const partitaDoc = doc(projectFirestore, "partite", id);
    return deleteDoc(partitaDoc);
  };

  getAllPartite = () => {
    return getDocs(partitaCollectionRef);
  };

  getPartita = (id) => {
    const partitaDoc = doc(projectFirestore, "partite", id);
    return getDoc(partitaDoc);
  };
}

export default new PartitaDataService();
