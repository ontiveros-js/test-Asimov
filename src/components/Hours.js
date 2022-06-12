import React, { useState } from "react";
import Creado from "./Creado";
import Modal from "./Modal";
import NoCreado from "./NoCreado";

const db = [
  {
    apellido: "mazano",
    correo: "damanz101@el.com",
    nombre: "daniel",
    fecha: "10-06-2022",
    hora: "10:00 - 11:00",
  },
];
const Hours = ({ date, myDisabled }) => {
  const [hourModal, setHourModal] = useState("");
  const [modal, setModal] = useState(false);
  let children;

  const dateString = date.toLocaleDateString();

  const frame = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
    "4:00 - 5:00",
    "5:00 - 6:00",
  ];

  for (const oneDb of db) {
    children = frame.map((el) => {
      if (el === oneDb.hora && dateString === oneDb.fecha) {
        return (
          <div key={el}>
            <Creado datos={oneDb} hour={el} myDisabled={myDisabled} />
          </div>
        );
      } else {
        return (
          <div key={el}>
            <NoCreado
              myDisabled={myDisabled}
              hour={el}
              modal={modal}
              setModal={setModal}
              setHourModal={setHourModal}
            />
          </div>
        );
      }
    });
  }

  return (
    <>
      <div className="accordion" id="accordionExample">
        {children}
      </div>
      {modal && (
        <Modal
          date={date}
          hourModal={hourModal}
          setModal={setModal}
          modal={modal}
          db={db}
        />
      )}
    </>
  );
};

export default Hours;
