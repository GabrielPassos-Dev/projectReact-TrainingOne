import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";
import { v4 } from "uuid";
import ViewCart from "./components/ViewCart";
import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [list, setList] = useLocalStorage("list", []);

  const { setCart } = useContext(MyContext);

  function addItem(title, quantity) {
    const newList = {
      id: v4(),
      title,
      quantity,
      value: 0,
      isCompleted: false,
    };
    setList((prev) => [...prev, newList]);
  }

  function removeItem(itemId) {
    setList((prev) => prev.filter((item) => item.id !== itemId));
  }

  function updateValue(itemId, newValue) {
    setList((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, value: newValue } : item,
      ),
    );
  }

  function moveToCart(item) {
    setList((prev) => prev.filter((p) => p.id !== item.id));

    setCart((prev) => [...prev, item]);
  }

  return (
    <div className="bg-slate-700 max-w-screen min-h-screen flex items-center justify-center py-20">
      <div className=" flex flex-col gap-4 ">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-mono p-3">
          Lista de Compras
        </h1>
        <AddItem addItem={addItem} />
        <ShoppingList
          updateValue={updateValue}
          removeItem={removeItem}
          list={list}
          moveToCart={moveToCart}
        />
        <ViewCart />
      </div>
    </div>
  );
}

export default App;
