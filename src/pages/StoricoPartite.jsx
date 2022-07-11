import React, { useEffect, useState } from "react";
import { funzioniDBPartita } from "../firebase/funzioni";

const StoricoPartite = ({ getPartitaId }) => {
  const [partite, setPartite] = useState([]);
  useEffect(() => {
    getPartite();
  }, []);

  const getPartite = async () => {
    const data = await funzioniDBPartita.getAllPartite();
    console.log(data.docs);
    setPartite(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await funzioniDBPartita.deletePartita(id);
    getPartite();
  };
  return (
    <>
      <div className="container">
        <div className="mb-2">
          <button variant="dark edit" onClick={getPartite}>
            Refresh List
          </button>
        </div>

        {/* <pre>{JSON.stringify(partite, undefined, 2)}</pre>} */}
        <table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Mappa</th>
              <th>Posizionamento<br />Roby</th>
              <th>Posizionamento<br />Dany</th>
              <th>Posizionamento<br />Boffy</th>
              <th>Posizionamento<br />Malsana</th>
              <th>Posizionamento<br />Marco</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partite.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.createdAt.toDate().toDateString()}</td>
                  <td>{doc.mappa}</td>
                  <td>{doc.posRoby}</td>
                  <td>{doc.posDany}</td>
                  <td>{doc.posBoffy}</td>
                  <td>{doc.posMalsana}</td>
                  <td>{doc.posMarco}</td>
                  <td>
                    <button
                      variant="danger"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StoricoPartite;
