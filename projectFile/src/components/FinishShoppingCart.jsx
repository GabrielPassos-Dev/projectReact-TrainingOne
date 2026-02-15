import { Link, useNavigate } from "react-router-dom";
function FinishShoppingCart({ total, setCart }) {
  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value ?? 0);
  }

  const navigate = useNavigate();

  function finish() {
    setCart([]);
    navigate("/");
  }

  return (
    <div className="sticky bottom-0 w-90 bg-white flex flex-col gap-4 items-center justify-center py-5 rounded-md">
      <div className="w-74 px-2 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm flex flex-row gap-2 items-center justify-center">
        <div>Total do carrinho:</div>
        <div className="font-bold ">{formatReal(total)}</div>
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className=" w-25 text-center
          px-7 py-2.5 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-800 hover:shadow-l hover:text-white transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Voltar
        </Link>
        <button
          onClick={() => finish()}
          className=" w-45 text-center
          px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default FinishShoppingCart;
