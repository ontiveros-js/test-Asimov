import React from "react";

const NoCreado = ({ hour, modal, setModal, setHourModal, myDisabled }) => {
  const key =
    hour[0] === "1"
      ? hour[1] === ":"
        ? hour[0] + "a"
        : hour[0] + hour[1]
      : hour[0];

  const onClick = () => {
    setHourModal(hour);
    setModal(!modal);
  };

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
          <h6 style={myDisabled ? { color: "gray" } : { color: "green" }}>
            Free
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
          <button
            className="btn btn-primary"
            onClick={onClick}
            type="button"
            disabled={myDisabled ? true : false}
          >
            Create an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoCreado;
