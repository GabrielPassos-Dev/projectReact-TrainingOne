import { Trash2 } from "lucide-react";
import { Button } from "./ui/buttons/Button";

function formatReal(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value ?? 0);
}

function ListCart({ cart, removeItem }) {

  return (
    <>
      {cart.length > 0 ? (
        <ul className="w-90 bg-slate-800 flex flex-col gap-3 items-center justify-center py-5 rounded-md">
          {cart.map((currentItem) => (
            <li key={currentItem.id} className="flex gap-2  ">
              <div className="flex">
                <div className="w-10 py-3 bg-slate-900 text-gray-500 shadow-sm text-center rounded-tl-md rounded-bl-md mx-1 ">
                  {currentItem.quantity}
                </div>
                <div
                  className={
                    "overflow-wrap:anywhere w-35 py-3 text-gray-300 bg-slate-900 p-1 text-center"
                  }
                >
                  {currentItem.title}
                </div>
                <div className="w-25 px-2 py-2 bg-slate-900 text-gray-500  flex f items-center justify-center rounded-tr-md rounded-br-md ">
                  <div>
                    {formatReal(currentItem.value * currentItem.quantity)}
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <Button
                  onClick={() => removeItem(currentItem.id)}
                  variant="danger"
                  size="sm"
                  className="py-2 bg-transparent text-gray-300"
                >
                  <Trash2 />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-90 bg-slate-800 flex flex-col gap-3 items-center justify-center py-5 rounded-md text-center text-gray-500">
          Sua compra irá aparecer aqui
        </div>
      )}
    </>
  );
}

export default ListCart;
