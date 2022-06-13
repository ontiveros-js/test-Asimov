import React, { useState } from "react";
import axios from "axios";

const valueDefoult = {
  nombre: "",
  apellido: "",
  correo: "",
  fecha: "",
  hora: "",
};

const Modal = ({ date, hourModal, setModal, modal, fetching }) => {
  const [input, setInput] = useState(valueDefoult);

  let dateString = date.toLocaleDateString();

  const submit = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:3001/api/appointment",
      input
    );
    fetching();
    setModal(!modal);
  };

  return (
    <div className="modal">
      <form onSubmit={submit}>
        <p style={{ background: "white" }}>appointment to {dateString}</p>
        <p style={{ background: "white" }}>hour: {hourModal}</p>
        <input
          type="text"
          required
          placeholder="nombre"
          name="nombre"
          onChange={(e) =>
            setInput({
              ...input,
              hora: hourModal,
              fecha: dateString,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="text"
          required
          placeholder="apellido"
          name="apellido"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="email"
          required
          placeholder="correo"
          name="correo"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button type="submit">crear</button>
        <button onClick={() => setModal(!modal)}>cerrar</button>
      </form>
    </div>
  );
};

export default Modal;
