function FinishShoppingCart({ total }) {
  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  return (
    <div className="flex flex-row gap-4">
      <button
        className="
        px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Ver carrinho de compras
      </button>
      <div className="w-30 px-2 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm">
        <div>Total da lista:</div>
        <div className="font-bold ">{formatReal(total)}</div>
      </div>
    </div>
  );
}
export default FinishShoppingCart;
