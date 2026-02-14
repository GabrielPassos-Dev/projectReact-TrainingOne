import { Link } from "react-router-dom";

function ViewCart() {

  return (
    <div className="flex flex-row gap-4">
      <Link to="/compras"
        className=" w-full
        px-7 py-2.5 text-center bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Ver carrinho de compras
      </Link>
    </div>
  );
}
export default ViewCart;
