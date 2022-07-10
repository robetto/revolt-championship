import React, { useState, useEffect } from "react";
import PartitaDataService from "../../firebase/funzioni";
import { Autocomplete } from "../Autocomplete";

const AddPartita = ({ id, setPartitaId }) => {
  const [title, setTitle] = useState("");
  const [mappa, setMappa] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newPartita = {
      mappa,
      title,
      author,
    };
    console.log(newPartita);

    try {
      if (id !== undefined && id !== "") {
        await PartitaDataService.updatePartita(id, newPartita);
        setPartitaId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await PartitaDataService.addPartite(newPartita);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await PartitaDataService.getPartita(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
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
          <Autocomplete
            mappa={mappa}
            setMappa={setMappa}
            suggestions={["White", "Black", "Green", "Blue", "Yellow", "Red"]}
          />

          <label>posizionamento roby</label>
          <input
            type="text"
            id="formBookTitle"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>posizionamento Dany</label>
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <div className="d-grid gap-2">
            <button variant="primary" type="Submit">
              Add/ Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPartita;
