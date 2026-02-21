import { Button } from "./ui/buttons/Button";

function ViewCart() {

  return (
    <div className="flex flex-row gap-4">
      <Button to="/compras" className="w-full" 
      >
        Ver carrinho de compras
      </Button>
    </div>
  );
}
export default ViewCart;
