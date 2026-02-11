import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);
  function addQt() {
    return setQuantity(quantity + 1);
  }
  function removeQt() {
    return setQuantity(quantity - 1);
  }

  return (
    <div className="flex flex-row gap-4 ">
      {quantity > 1 && (
        <button
          onClick={removeQt}
          className="flex justify-center items-center w-full px-3 py-1 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
        > <CircleMinus /> </button>
      )}
      <input
        className="w-20 px-1 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />

        <button
          onClick={addQt}
          className="flex justify-center items-center w-full px-3 py-1 bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
          type="button"
          value="+"
        > <CirclePlus /> </button>

    </div>
  );
}

export default QuantityInput;
