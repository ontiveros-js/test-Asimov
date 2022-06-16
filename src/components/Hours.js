import React, { useState } from "react";
import Creado from "./Creado";
import Modal from "./Modal";
import NoCreado from "./NoCreado";
import "react-toastify/dist/ReactToastify.css";

const Hours = ({ date, myDisabled, fetching, db }) => {
  const [hourModal, setHourModal] = useState("");
  const [modal, setModal] = useState(false);

  let frame = [
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

  return (
    <>
      <div className="accordion" id="accordionExample">
        {frame.map((el) => {
          let match = db.find((ele) => ele.hora === el);
          if (match) {
            return (
              <div key={match.hora}>
                <Creado
                  datos={match}
                  myDisabled={myDisabled}
                  fetching={fetching}
                  setModal={setModal}
                />
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
        })}
      </div>
      {modal && (
        <Modal
          date={date}
          hourModal={hourModal}
          setModal={setModal}
          modal={modal}
          db={db}
          fetching={fetching}
        />
      )}
    </>
  );
};

export default Hours;
