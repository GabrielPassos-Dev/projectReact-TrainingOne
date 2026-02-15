import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [valor, setValor] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{ valor, setValor, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
