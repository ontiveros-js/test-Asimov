import React from "react";

const Creado = ({ datos, hour, myDisabled }) => {
  const { nombre, apellido, correo } = datos;

  const key =
    hour[0] === "1"
      ? hour[1] === ":"
        ? hour[0] + "a"
        : hour[0] + hour[1]
      : hour[0];

  return (
    <div className="accordion-item">
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
          {hour}
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
          <button disabled={myDisabled ? true : false}>editar</button>
          <button disabled={myDisabled ? true : false}>eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Creado;
