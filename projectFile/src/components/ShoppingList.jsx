import { Trash2, ShoppingCart } from "lucide-react";
import { NumericFormat } from "react-number-format";

function ShoppingList({ product, deleteItemToList, updateItemValue , AddItemToCart}) {
  return (
    <>
      <ul className="bg-slate-300 rounded-md p-6 flex flex-col gap-4">
        {product.map((currentItem) => (
          <li className="flex gap-2">
            <div className="w-20 px-1 py-2 bg-slate-500 text-gray-900 rounded-lg shadow-sm text-center font-bold">
              {currentItem.quantity}
            </div>

            <div
              className={"w-full px-2 py-2 bg-slate-400 rounded-md p-1"}
              key={currentItem.id}
            >
              {currentItem.title}
            </div>

            <NumericFormat
              className="w-20 px-1 py-1.5 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={currentItem.value || ""}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              placeholder="R$ 0,00"
              onValueChange={(values) => {
                updateItemValue(currentItem.id, values.floatValue || 0);
              }}
            />

            <button
              onClick={() => AddItemToCart(currentItem)}
              className=" px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all  duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <ShoppingCart />
            </button>

            <button
              onClick={() => deleteItemToList(currentItem.id)}
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
