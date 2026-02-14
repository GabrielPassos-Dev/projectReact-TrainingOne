import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [ valor, setValor] = useState(0);

  return (
    <MyContext.Provider value={{ valor, setValor }}>
      {children}
    </MyContext.Provider>
  );
};
