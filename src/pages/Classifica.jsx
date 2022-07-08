import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const Classifica = () => {
  const [posList, setPosList] = useState([]);
  const posCollectionRef = collection(projectFirestore, "posizionamenti");

  const deletePos = async (id) => {
    const posDoc = doc(projectFirestore, "posizionamenti", id);
    await deleteDoc(posDoc);
  };

  const getPos = async () => {
    const data = await getDocs(posCollectionRef);
    setPosList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("asdasd");
  };

  useEffect(() => {
    getPos();
  }, [deletePos]);

  return (
    <div className="homePage">
      {posList.map((pos) => {
        return (
          <div className="pos">
            <div className="posHeader">
              <div className="title">
                <h1> {pos.title}</h1>
              </div>
              <div className="deletePos">
                <button
                  onClick={() => {
                    deletePos(pos.id);
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              </div>
            </div>
            <div className="posTextContainer">mappa {pos.idMappa} </div>
            <h3>pilota {pos.idPilota}</h3>
            <h3>id {pos.id}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Classifica;
