import { Link } from "react-router-dom";
function FinishShoppingCart({ total }) {

  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value ?? 0);
  }

  return (
    <div className="w-90 bg-white flex flex-col gap-4 items-center justify-center py-5 rounded-md">
      <div className="w-65 px-2 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm flex flex-row gap-2 items-center justify-center">
        <div>Total do carrinho:</div>
        <div className="font-bold ">{formatReal(total)}</div>
      </div>
      <Link
        to="/"
        className=" w-40 text-center
        px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Voltar
      </Link>
    </div>
  );
}

export default FinishShoppingCart;
