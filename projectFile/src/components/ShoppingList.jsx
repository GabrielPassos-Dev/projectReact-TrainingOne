import { Trash2, ShoppingCart } from "lucide-react";
import { NumericFormat } from "react-number-format";

function ShoppingList({
  product,
  deleteItemToList,
  updateItemValue,
  AddItemToCart,
}) {
  return (
    <>
      {product.length > 0 ? (
        <ul className="bg-slate-300 rounded-md p-6 flex flex-col gap-4">
          {product.map((currentItem) => (
            <li className="flex gap-2">
              <div className="flex flex-row rounded-md">
                <div className="w-10 px-1 py-2 bg-slate-500 text-gray-900 shadow-sm text-center font-bold rounded-tl-md rounded-bl-md">
                  {currentItem.quantity}
                </div>
                <div
                  className={"[overflow-wrap:anywhere] w-25 px-2 py-2 rounded-tr-md rounded-br-md bg-slate-400 p-1"}
                  key={currentItem.id}
                >
                  {currentItem.title}
                </div>
              </div>

              <NumericFormat
                className="w-20 px-1 py-1.5 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={currentItem.value || ""}
                inputMode="decimal"
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
                onClick={
                  currentItem.value
                    ? () => AddItemToCart(currentItem)
                    : () =>
                        alert(
                          `Digite o preço do(a) ${currentItem.title} para prosseguir!`,
                        )
                }
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
      ) : (
        <div className="bg-slate-300 rounded-md p-6 flex flex-col gap-4 text-center">
          Adicione sua lista de compras aqui.
        </div>
      )}
    </>
  );
}

export default ShoppingList;
