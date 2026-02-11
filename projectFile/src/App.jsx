import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 1,
      title: "Maça",
      isQuantity: 3,
      isValue: 3.0,
      isCompleted: false,
    },
    {
      id: 2,
      title: "Arroz",
      isQuantity: 2,
      isValue: 15.0,
      isCompleted: false,
    },
    {
      id: 3,
      title: "Feijão",
      isQuantity: 10,
      isValue: 15.0,
      isCompleted: false,
    },
  ]);

  function addItemToCart(title, isQuantity) {
    const newShoppingCart = {
      id: 3,
      title: title,
      isQuantity: isQuantity,
      isValue: 0.0,
      isCompleted: false,
    };
    setShoppingCart([...shoppingCart, newShoppingCart]);
  }

  return (
    <div className="bg-slate-700 w-screen h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-4 ">
        <h1>Lista de Compras</h1>
        <AddItem addItemToCart={addItemToCart} />
        <ShoppingList shoppingCart={shoppingCart} />
      </div>
    </div>
  );
}

export default App;
