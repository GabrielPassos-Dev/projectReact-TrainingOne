import QuantityInput from "./QuantityInput";

function AddItem() {
    return (
        <div>
            <input placeholder="Digite aqui o item" type="text" />
            <QuantityInput />
            <button>Adicionar no Carrinho</button>

        </div>
    )
}

export default AddItem;