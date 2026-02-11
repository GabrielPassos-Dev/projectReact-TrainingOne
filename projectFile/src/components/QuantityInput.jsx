import { useState } from "react";

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);
  function addQt() {
    return setQuantity(quantity + 1);
  }
    function removeQt() {
    return setQuantity(quantity - 1)
  }

  return (
    <div>
      { quantity > 1 && <input onClick={removeQt} type="button" value="-" />}
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <input onClick={addQt} type="button" value="+" />
    </div>
  );
}

export default QuantityInput;