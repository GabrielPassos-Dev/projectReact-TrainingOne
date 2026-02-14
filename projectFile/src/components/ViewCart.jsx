import { useNavigate } from "react-router-dom";

function ViewCart() {
  const navigate = useNavigate();

  function goToCart(){
    navigate("/compras")
  }

  return (
    <div className="flex flex-row gap-4">
      <button onClick={() => goToCart()}
        className=" w-full
        px-7 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Ver carrinho de compras
      </button>
    </div>
  );
}
export default ViewCart;
