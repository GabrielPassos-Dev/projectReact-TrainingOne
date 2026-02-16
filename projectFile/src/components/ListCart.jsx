import { Trash2 } from "lucide-react";

function ListCart({ cart, deleteItemToCart}) {
  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value ?? 0);
  }

  return (
    <>
      {cart.length > 0 ? (
        <ul className="w-90 bg-slate-800 flex flex-col gap-3 items-center justify-center py-5 rounded-md">
          {cart.map((currentItem) => (
            <li className="flex gap-4">
              <div className="flex">
                <div className="w-10 py-3 bg-slate-900 text-gray-500 shadow-sm text-center rounded-tl-md rounded-bl-md mx-1 ">
                  {currentItem.quantity}
                </div>
                <div
                  className={
                    "[overflow-wrap:anywhere] w-35 py-3 text-gray-300 bg-slate-900 p-1 text-center"
                  }
                  key={currentItem.id}
                >
                  {currentItem.title}
                </div>
                <div className="w-25 px-2 py-2 bg-slate-900 text-gray-500  flex f items-center justify-center rounded-tr-md rounded-br-md ">
                  <div>
                    {formatReal(currentItem.value * currentItem.quantity)}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => deleteItemToCart(currentItem.id)}
                  className="py-3 btext-white font-semibold text-gray-300 cursor-pointer"
                >
                  <Trash2 />
                </button>
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
