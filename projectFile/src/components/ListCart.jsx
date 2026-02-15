function ListCart({ cart }) {
  function formatReal(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value ?? 0);
  }

  return (
    <>
    {cart.length > 0 ?
      <ul className="w-90 bg-slate-800 flex flex-col gap-3 items-center justify-center py-5 rounded-md">
        {cart.map((currentItem) => (
          <li className="flex">
            <div className="w-10 py-3 bg-slate-900  text-gray-500 shadow-sm text-center">
              {currentItem.quantity}
            </div>

            <div
              className={
                "w-40 py-3 text-gray-300 bg-slate-900 p-1 text-center "
              }
              key={currentItem.id}
            >
              {currentItem.title}
            </div>
            <div className="w-25 px-2 py-2 bg-slate-900 text-gray-500  flex f items-center justify-center">
              <div>{formatReal(currentItem.value*currentItem.quantity)}</div>
            </div>
          </li>
        ))}
      </ul> : <div className="w-90 bg-slate-800 flex flex-col gap-3 items-center justify-center py-5 rounded-md text-center text-gray-500">Sua compra irá aparecer aqui</div>}
    </>
  );
}

export default ListCart;
