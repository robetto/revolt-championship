import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadMappa = () => {
  const [file, setFile] = useState(null);
  const [nomeMappa, setNomeMappa] = useState("");
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChangeNomeMappa = (e) => {  
    setNomeMappa(e.target.value); 
  };

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className="upload__mappa">
      <form>
        
          <input type="text" placeholder="nomemappa" onChange={handleChangeNomeMappa} />
          
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} nomeMappa={nomeMappa} setNomeMappa={setNomeMappa} />}
        </div>
      </form>
    </div>
  );
};

export default UploadMappa;
