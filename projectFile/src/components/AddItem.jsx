import { useState } from "react";
import QuantityInput from "./QuantityInput";
import { Button } from "./ui/buttons/Button";

function AddItem({ addItem }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="sticky top-0 bg-slate-300 rounded-md p-6 flex flex-col gap-4">
      <input
        className=" w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
        placeholder="Digite o nome do item..."
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <QuantityInput value={quantity} onChange={setQuantity} />

      <Button
        onClick={() => {
          if (!title) {
            alert("Digite algo!");
            return
          }
          addItem(title.trim(), quantity);
          setTitle("");
        }}
      >
        Adicionar na Lista
      </Button>
    </div>
  );
}

export default AddItem;
