import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [valor, setValor] = useState(() => {
    return Number(localStorage.getItem("valor") || 0);
  });

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  useEffect(() => {
    localStorage.setItem("valor", valor);
  }, [valor]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <MyContext.Provider value={{ valor, setValor, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
