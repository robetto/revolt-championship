import React, { useState, useEffect } from "react";
import { funzioniDBPartita } from "../../firebase/funzioni";
import { timestamp } from "../../firebase/config";

const AddPartita = ({ id, setPartitaId, listaMappe }) => {
  const [fList, setFlist] = useState([]);

  const [mappa, setMappa] = useState("");
  const [posRoby, setPosRoby] = useState("");
  const [posDany, setPosDany] = useState("");
  const [posBoffy, setPosBoffy] = useState("");
  const [posMalsana, setPosMalsana] = useState("");
  const [posMarco, setPosMarco] = useState("");

  const [jollyRoby, setJollyRoby] = useState(false);
  const [jollyDany, setJollyDany] = useState(false);
  const [jollyBoffy, setJollyBoffy] = useState(false);
  const [jollyMalsana, setJollyMalsana] = useState(false);
  const [jollyMarco, setJollyMarco] = useState(false);

  const [tempoRoby, setTempoRoby] = useState("");
  const [tempoDany, setTempoDany] = useState("");
  const [tempoBoffy, setTempoBoffy] = useState("");
  const [tempoMalsana, setTempoMalsana] = useState("");
  const [tempoMarco, setTempoMarco] = useState("");

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
      mappa === "" ||
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
      jollyRoby,
      tempoRoby,
      posDany,
      jollyDany,
      tempoDany,
      posBoffy,
      jollyBoffy,
      tempoBoffy,
      posMalsana,
      jollyMalsana,
      tempoMalsana,
      posMarco,
      jollyMarco,
      tempoMarco,
      createdAt: timestamp,
    };

    try {
      await funzioniDBPartita.addPartite(newPartita);
      setMessage({ error: false, msg: "Partita aggiunta con successo" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setPosRoby("");
    setPosDany("");
    setPosBoffy("");
    setPosMalsana("");
    setPosMarco("");

    setJollyRoby(false);
    setJollyDany(false);
    setJollyBoffy(false);
    setJollyMalsana(false);
    setJollyMarco(false);

    setTempoRoby("");
    setTempoDany("");
    setTempoBoffy("");
    setTempoMalsana("");
    setTempoMarco("");

    setMappa("");
  };

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
                <input type="checkbox" id="jollyRoby" value={jollyRoby}  checked={jollyRoby} onChange={() => setJollyRoby(!jollyRoby)} />
                <input
                  type="text"
                  id="tempoRoby"
                  value={tempoRoby}
                  className="tempo__input"
                  onChange={(e) => setTempoRoby(e.target.value)}
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
                <input type="checkbox" id="jollyDany" value={jollyDany}  checked={jollyDany} onChange={() => setJollyDany(!jollyDany)} />
                <input
                  type="text"
                  id="tempoDany"
                  value={tempoDany}
                  className="tempo__input"
                  onChange={(e) => setTempoDany(e.target.value)}
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
                <input type="checkbox" id="jollyBoffy" value={jollyBoffy} checked={jollyBoffy} onChange={() => setJollyBoffy(!jollyBoffy)}  />
                <input
                  type="text"
                  id="tempoBoffy"
                  value={tempoBoffy}
                  className="tempo__input"
                  onChange={(e) => setTempoBoffy(e.target.value)}
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
                <input type="checkbox" id="jollyMalsana" value={jollyMalsana} checked={jollyMalsana} onChange={() => setJollyMalsana(!jollyMalsana)} />
                <input
                  type="text"
                  id="tempoMalsana"
                  value={tempoMalsana}
                  className="tempo__input"
                  onChange={(e) => setTempoMalsana(e.target.value)}
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
                <input type="checkbox" id="jollyMarco" value={jollyMarco} checked={jollyMarco} onChange={() => setJollyMarco(!jollyMarco)} />
                <input
                  type="text"
                  id="tempoMarco"
                  value={tempoMarco}
                  className="tempo__input"
                  onChange={(e) => setTempoMarco(e.target.value)}
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
