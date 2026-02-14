import { useNavigate } from "react-router-dom";

function FinishShoppingCart({ total }) {
  const navigate = useNavigate();

  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  return (
    <div className="bg-slate-700 w-screen min-h-screen flex items-center justify-center py-20">
      <div className="w-30 px-2 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm">
        <div>Total da lista:</div>
        <div className="font-bold ">{formatReal(total)}</div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="
        px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Voltar
      </button>
    </div>
  );
}

export default FinishShoppingCart;
