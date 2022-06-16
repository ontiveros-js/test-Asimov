import React, { useContext } from "react";
import { Contexto } from "../Context/Context";
import axios from "axios";

const Creado = ({ datos, myDisabled, fetching, setModal }) => {
  const { nombre, apellido, correo } = datos;
  const { setInput } = useContext(Contexto);

  const key =
    datos.hora[0] === "1"
      ? datos.hora[1] === ":"
        ? datos.hora[0] + "a"
        : datos.hora[0] + datos.hora[1]
      : datos.hora[0];

  const onDelete = async () => {
    await axios.delete("http://localhost:3001/api/appointment/" + datos._id);
    fetching();
  };

  const onUpdate = async () => {
    setModal(true);
    setInput(datos);
  };

  return (
    <div className="accordion-item">
      <span></span>
      <h2 className="accordion-header" id={`heading${key}`}>
        <button
          className={
            myDisabled ? "accordion-button text-muted" : "accordion-button"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${key}`}
          aria-expanded="true"
          aria-controls={`collapse${key}`}
        >
          {datos.hora}
          <h6 style={myDisabled ? { color: "gray" } : { color: "red" }}>
            Taken
          </h6>
        </button>
      </h2>
      <div
        id={`collapse${key}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${key}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <h5>
            {nombre} {apellido}
          </h5>
          <h5>{correo}</h5>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              disabled={myDisabled ? true : false}
              onClick={onUpdate}
            >
              editar
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creado;
