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
  ]);

  return (
    <div className=" flex flex-col gap-4">
      <h1>Lista de Compras</h1>
      <AddItem />
      <ShoppingList />
    </div>
  );
}

export default App;
