import { Trash2, Check } from "lucide-react";
import { useState } from "react";

function ShoppingList({ shoppingCart, deleteItemToCart }) {
  const [valueItem, setValueITem] = useState(null);
  console.log(valueItem)
  return (
    <>
    <ul className="bg-slate-300 rounded-md p-6 flex flex-col gap-4">
      {shoppingCart.map((currentItem) => (
        <li className="flex gap-2">
          <div className="w-20 px-1 py-1 bg-slate-500 text-gray-900 rounded-lg shadow-sm">
            {currentItem.quantity}
          </div>

          <div
            className="w-full bg-slate-400 rounded-md p-1"
            key={currentItem.id}
          >
            {currentItem.title}
          </div>
        
          <input
            className="w-20 px-1 py-1.5 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="number"
            value={valueItem}
            placeholder="R$ 0,00"
            onChange={(event) => setValueITem(event.target.value)}
          />

          <button className=" px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all  duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            <Check />
          </button>

          <button
            onClick={() => deleteItemToCart(currentItem.id)}
            className="px-2 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  </>
  );
}

export default ShoppingList;
