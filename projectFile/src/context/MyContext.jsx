import { createContext} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  //const [valor, setValor] = useLocalStorage("valor", 0);
  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
