import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const useFirestore = (collezione) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {

    const unsubscribe = onSnapshot(
        collection(projectFirestore, collezione), 
        (snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
              documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        },
        (error) => {
          // ...
        });

    return () => unsubscribe();

  }, [collezione]);

  return { docs };
};

export default useFirestore;
