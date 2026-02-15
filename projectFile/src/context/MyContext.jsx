import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [valor, setValor] = useState(0);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  return (
    <MyContext.Provider value={{ valor, setValor, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
