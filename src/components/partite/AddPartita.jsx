import React, { useState, useEffect } from "react";
import { funzioniDBPartita } from "../../firebase/funzioni";
import Autocomplete from "../Autocomplete";
import { timestamp } from "../../firebase/config";
import useFirestore from "../../hooks/useFirestore";

const AddPartita = ({ id, setPartitaId, listaMappe }) => {
  const [fList, setFlist] = useState([]);

  const [mappa, setMappa] = useState("");
  const [posRoby, setPosRoby] = useState("");
  const [posDany, setPosDany] = useState("");
  const [posBoffy, setPosBoffy] = useState("");
  const [posMalsana, setPosMalsana] = useState("");
  const [posMarco, setPosMarco] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const changeInput = (e) => {
    let searchStr = e.target.value.trim();
    setMappa(searchStr);
    if (searchStr.length) {
      const filteredList = listaMappe.filter((item) => {
        if (item.toUpperCase().includes(searchStr.toUpperCase())) {
          return item;
        }
        return false;
      });
      setFlist(filteredList);
    } else {
      setFlist([]);
    }
  };
  const onSelectMappa = (item) => {
    setMappa(item);
    setFlist([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (
      posRoby === "" ||
      posDany === "" ||
      posBoffy === "" ||
      posMalsana === ""
    ) {
      setMessage({ error: true, msg: "Manca qualche campo coglione!" });
      return;
    }

    const newPartita = {
      mappa,
      posRoby,
      posDany,
      posBoffy,
      posMalsana,
      posMarco,
      createdAt: timestamp,
    };
    console.log(newPartita);

    try {
      if (id !== undefined && id !== "") {
        await funzioniDBPartita.updatePartita(id, newPartita);
        setPartitaId("");
        setMessage({ error: false, msg: "Partita modificata con successo" });
      } else {
        await funzioniDBPartita.addPartite(newPartita);
        setMessage({ error: false, msg: "Partita aggiunta con successo" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setPosRoby("");
    setPosDany("");
    setPosBoffy("");
    setPosMalsana("");
    setPosMarco("");
    setMappa("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await funzioniDBPartita.getPartita(id);
      console.log("the record is :", docSnap.data());
      setPosRoby(docSnap.data().posRoby);
      setPosDany(docSnap.data().posDany);
      setPosBoffy(docSnap.data().posBoffy);
      setPosMalsana(docSnap.data().posMalsana);
      setPosMarco(docSnap.data().posMarco);
      setMappa(docSnap.data().mappa);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, []);

  return (
    <div className="container">
      <div className="p-4 box">
        {message?.msg && (
          <div
            className="alert"
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-partita">
            <div className="form-left">
              <div className="mappa__autocomplete">
                <input
                  type="search"
                  onChange={(e) => changeInput(e)}
                  value={mappa}
                />
                {fList.map((item, index) => {
                  return (
                    <p
                      className="auto-complete"
                      key={index}
                      onClick={() => onSelectMappa(item)}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="form-right">
              <div className="form-group">
                <label>posizionamento roby</label>
                <input
                  type="text"
                  id="posRoby"
                  value={posRoby}
                  onChange={(e) => setPosRoby(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>posizionamento dany</label>
                <input
                  type="text"
                  id="posDany"
                  value={posDany}
                  onChange={(e) => setPosDany(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>posizionamento boffy</label>
                <input
                  type="text"
                  id="posBoffy"
                  value={posBoffy}
                  onChange={(e) => setPosBoffy(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>posizionamento malsana</label>
                <input
                  type="text"
                  id="posMalsana"
                  value={posMalsana}
                  onChange={(e) => setPosMalsana(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>posizionamento marco</label>
                <input
                  type="text"
                  id="posMarco"
                  value={posMarco}
                  onChange={(e) => setPosMarco(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="add-partita-buttons">
            <button variant="primary" type="Submit">
              Add / Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPartita;
