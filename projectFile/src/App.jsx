import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";
import { v4 } from "uuid";
import ViewCart from "./components/ViewCart";
import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [product, setProduct] = useLocalStorage("list", []);

  const { cart, setCart } = useContext(MyContext);

  function addItemToList(title, quantity) {
    const newProduct = {
      id: v4(),
      title: title,
      quantity: quantity,
      value: 0.0,
      isCompleted: false,
    };
    setProduct([...product, newProduct]);
  }

  function deleteItemToList(itemId) {
    const newList = product.filter((sCart) => sCart.id !== itemId);
    setProduct(newList);
  }

  function updateItemValue(itemId, newValue) {
    setProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, value: newValue } : item,
      ),
    );
  }

  function AddItemToCart(item) {
    setProduct((prev) => prev.filter((p) => p.id !== item.id));

    setCart((prev) => [...prev, item]);
  }
  console.log(cart);

  return (
    <div className="bg-slate-700 max-w-screen min-h-screen flex items-center justify-center py-20">
      <div className=" flex flex-col gap-4 ">
        <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-mono p-3">
          Lista de Compras
        </h1>
        <AddItem addItemToList={addItemToList} />
        <ShoppingList
          updateItemValue={updateItemValue}
          deleteItemToList={deleteItemToList}
          product={product}
          AddItemToCart={AddItemToCart}
        />
        <ViewCart />
      </div>
    </div>
  );
}

export default App;
