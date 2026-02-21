import FinishShoppingCart from "../components/FinishShoppingCart";
import { useContext, } from "react";
import { MyContext } from "../context/MyContext";
import ListCart from "../components/ListCart";

function ShoppingCartPage() {
  const { cart, setCart } = useContext(MyContext);

  function removeItem(itemId) {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  }

  const total = cart.reduce(
    (acc, currentItem) => acc + currentItem.quantity * currentItem.value,
    0,
  );

  return (
    <div className="max-w-screen min-h-screen bg-slate-700 flex flex-col gap-1 items-center justify-center py-20">
      <ListCart removeItem={removeItem} cart={cart} />
      <FinishShoppingCart setCart={setCart} total={total} />
    </div>
  );
}
export default ShoppingCartPage;
