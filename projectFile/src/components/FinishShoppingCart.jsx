import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/buttons/Button";

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
        <Button
          to="/"
          variant="ghost"
          size="md"
        >
          Voltar
        </Button>

        <Button
          onClick={() => finish()}
          variant="primary"
          size="md"
        >
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
}

export default FinishShoppingCart;
