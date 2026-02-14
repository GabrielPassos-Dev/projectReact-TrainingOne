import FinishShoppingCart from "../components/FinishShoppingCart";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function ShoppingCartPage() {
  const { valor } = useContext(MyContext);

  return (
    <div className="w-screen h-screen bg-slate-700">
      <FinishShoppingCart total={valor} />
    </div>
  );
}
export default ShoppingCartPage;
