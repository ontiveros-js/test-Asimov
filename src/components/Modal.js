import React, { useState } from "react";

const valueDefoult = {
  nombre: "",
  apellido: "",
  correo: "",
  text: "",
  fecha: "",
  hora: "",
};

const Modal = ({ date, hourModal, setModal, modal, db }) => {
  const [input, setInput] = useState(valueDefoult);

  let dateString = date.toLocaleDateString();

  const clickS = (e) => {
    e.preventDefault();
    db.push(input);
    setModal(!modal);
    console.log(db);
  };

  return (
    <div className="modal">
      <form onSubmit={clickS}>
        <p style={{ background: "white" }}>appointment to {dateString}</p>
        <p style={{ background: "white" }}>hour: {hourModal}</p>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={(e) =>
            setInput({
              ...input,
              hourModal,
              fecha: dateString,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="text"
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
          type="text"
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
    //
    //           <li>9:00 - 10:00</li>
    //           <input
    //             type="text"
    //             name="9:00 - 10:00"
    //             value={input.text}
    //             onChange={(e) =>
    //               setInput({
    //                 ...input,
    //                 text: e.target.value,
    //                 fecha: date.toLocaleDateString(),
    //                 hora: e.target.name,
    //               })
    //             }
    //           />
    //           <h6>{input.text}</h6>

    //           <button>eliminar</button>
  );
};

export default Modal;
