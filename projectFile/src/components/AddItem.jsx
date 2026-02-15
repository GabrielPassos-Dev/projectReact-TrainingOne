import { useState } from "react";
import QuantityInput from "./QuantityInput";

function AddItem({ addItemToList }) {
  const [title, setTitle] = useState("");
  const [isQuantity, setIsQuantity] = useState(1);

  return (
    <div className="sticky top-0 bg-slate-300 rounded-md p-6 flex flex-col gap-4">
      <input
        className=" w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
        placeholder="Digite aqui o item"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <QuantityInput onChange={setIsQuantity} />

      <button
        onClick={() => {
          if (!title) {
            alert("Digite algo!");
            return
          }
          addItemToList(title.trim(), isQuantity);
          setTitle("");
        }}
        className="
        px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Adicionar na Lista
      </button>
    </div>
  );
}

export default AddItem;
