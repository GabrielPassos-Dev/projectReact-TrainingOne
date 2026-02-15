import FinishShoppingCart from "../components/FinishShoppingCart";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import ListCart from "../components/ListCart";

function ShoppingCartPage() {
  const { valor, cart, setCart } = useContext(MyContext);

  return (
    <div className="max-w-screen min-h-screen bg-slate-700 flex flex-col gap-1 items-center justify-center py-20">
      <ListCart cart={cart} />
      <FinishShoppingCart setCart={setCart} total={valor} />
    </div>
  );
}
export default ShoppingCartPage;
