import React, { createContext, useState } from "react";

export const Contexto = createContext();

const Context = ({ children }) => {
  const valueDefoult = {
    nombre: "",
    apellido: "",
    correo: "",
    fecha: "",
    hora: "",
  };

  const [input, setInput] = useState(valueDefoult);

  const values = {
    input,
    setInput,
    valueDefoult,
  };

  return <Contexto.Provider value={values}>{children}</Contexto.Provider>;
};

export default Context;
