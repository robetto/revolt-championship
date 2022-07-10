import React, { useEffect, useState } from "react";
import PartitaDataService from "../firebase/funzioni";

const StoricoPartite = ({ getPartitaId }) => {
  const [partite, setPartite] = useState([]);
  useEffect(() => {
    getPartite();
  }, []);

  const getPartite = async () => {
    const data = await PartitaDataService.getAllPartite();
    console.log(data.docs);
    setPartite(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await PartitaDataService.deletePartita(id);
    getPartite();
  };
  return (
    <>
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
            <th>Partita Author</th>
            <th>Mappa</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {partite.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.mappa}</td>
                <td>
                  <button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getPartitaId(doc.id)}
                  >
                    Edit
                  </button>
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
    </>
  );
};

export default StoricoPartite;
