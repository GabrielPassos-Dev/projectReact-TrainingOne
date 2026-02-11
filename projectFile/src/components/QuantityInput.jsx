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
          <input
            className="
          px-3 py-1
          bg-blue-400 text-white font-semibold
          rounded-lg shadow-md
          hover:bg-blue-500 hover:shadow-lg
          transition-all duration-300
        "
            onClick={removeQt}
            type="button"
            value="-"
          />
        )}
      <input
        className="
        w-full px-1 py-2.5
        bg-white text-gray-900
        border border-gray-300 rounded-lg
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition
      "
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <input
        className="
        px-3 py-1
        bg-blue-400 text-white font-semibold
        rounded-lg shadow-md
        hover:bg-blue-500 hover:shadow-lg
        transition-all duration-300
      "
        onClick={addQt}
        type="button"
        value="+"
      />
    </div>
  );
}

export default QuantityInput;
