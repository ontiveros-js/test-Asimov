import React, { useContext } from "react";
import { Contexto } from "../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";

const Modal = ({ date, hourModal, setModal, modal, fetching }) => {
  const { input, setInput, valueDefoult } = useContext(Contexto);

  let dateString = date.toLocaleDateString();

  const submit = async (e) => {
    e.preventDefault();

    if (input._id) {
      await axios.put(
        "http://localhost:3001/api/appointment/" + input._id,
        input
      );
    } else {
      const resp = await axios.post(
        "http://localhost:3001/api/appointment",
        input
      );
      if (resp.status === 202) {
        toast.info("You already have an appointment this day");
      }
    }

    fetching();
    setInput(valueDefoult);
    setModal(!modal);
  };

  const onClose = () => {
    setModal(!modal);
    setInput(valueDefoult);
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={submit}>
            <div className="modal-header">
              <div className="d-flex flex-column ml-4">
                <h5 className="modal-title d-block">
                  appointment to {dateString}
                </h5>
                <h6 className="modal-title d-block">
                  hour: {hourModal || input.hora}
                </h6>
              </div>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-2"
                type="text"
                value={input.nombre}
                required
                placeholder="nombre"
                name="nombre"
                onChange={(e) =>
                  setInput({
                    ...input,
                    hora: hourModal || input.hora,
                    fecha: dateString,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                className="form-control mb-2"
                type="text"
                value={input.apellido}
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
                className="form-control"
                type="email"
                value={input.correo}
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
