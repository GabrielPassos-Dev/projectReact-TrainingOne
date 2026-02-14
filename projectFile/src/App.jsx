import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";
import { v4 } from "uuid";
import ViewCart  from "./components/ViewCart";

function App() {
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: v4(),
      title: "Maça",
      quantity: 3,
      value: 3.0,
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Arroz",
      quantity: 2,
      value: 15.0,
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Feijão",
      quantity: 10,
      value: 15.0,
      isCompleted: false,
    },
  ]);
  console.log(shoppingCart);

  function addItemToCart(title, isQuantity) {
    const newShoppingCart = {
      id: v4(),
      title: title,
      quantity: isQuantity,
      value: 0.0,
      isCompleted: false,
    };
    setShoppingCart([...shoppingCart, newShoppingCart]);
  }

  function deleteItemToCart(itemId) {
    const newShoppingCart = shoppingCart.filter((sCart) => sCart.id !== itemId);
    setShoppingCart(newShoppingCart);
  }

  function updateItemValue(itemId, newValue) {
    setShoppingCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, value: newValue } : item,
      ),
    );
  }

  const total = shoppingCart.reduce((acc, currentItem) => {
    return acc + currentItem.quantity * currentItem.value;
  }, 0);
console.log(total)
  return (
    <div className="bg-slate-700 w-screen min-h-screen flex items-center justify-center py-20">
      <div className=" flex flex-col gap-4 ">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-mono p-3">
          Lista de Compras
        </h1>
        <AddItem addItemToCart={addItemToCart} />
        <ShoppingList
          updateItemValue={updateItemValue}
          deleteItemToCart={deleteItemToCart}
          shoppingCart={shoppingCart}
        />
        <ViewCart />
      </div>
    </div>
  );
}

export default App;
