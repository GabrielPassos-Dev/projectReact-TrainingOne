import FinishShoppingCart from "../components/FinishShoppingCart";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import ListCart from "../components/ListCart";

function ShoppingCartPage() {
  const { setValor, valor, cart, setCart } = useContext(MyContext);

  function deleteItemToCart(itemId) {
    const newCart = cart.filter((sCart) => sCart.id !== itemId);
    setCart(newCart);
  }
  
  const total = cart.reduce((acc, currentItem) => {
     return acc + currentItem.quantity * currentItem.value;
   }, 0);
    useEffect(() => {
      setValor(total);
    }, [cart]);

  return (
    <div className="max-w-screen min-h-screen bg-slate-700 flex flex-col gap-1 items-center justify-center py-20">
      <ListCart deleteItemToCart={deleteItemToCart} cart={cart} />
      <FinishShoppingCart setCart={setCart} total={valor} />
    </div>
  );
}
export default ShoppingCartPage;
