import FinishShoppingCart from "../components/FinishShoppingCart";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import ListCart from "../components/ListCart";

function ShoppingCartPage() {
  const { valor, cart } = useContext(MyContext);

  return (
    <div className="w-screen h-screen bg-slate-700 flex flex-col gap-1 items-center justify-center">
      <ListCart cart={cart} />
      <FinishShoppingCart total={valor} />
    </div>
  );
}
export default ShoppingCartPage;
