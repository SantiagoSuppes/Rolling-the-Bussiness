import { useCart } from "../context/useCart";

const Cart = () => {
    const { cart, getTotal} = useCart();

    if (cart.length < 1) {
        return (<h2 className="flex justify-center mt-4">No tienes elementos en el carrito</h2>)
    }
    return(
        <div className="flex flex-col">
            <ul>
                {cart.map(prod => (
                    <li key={prod.id}>
                        <p>X{prod.quantity}{prod.name}</p>
                        <button onClick={cart.delete(prod)} className="bg-red-900 p-2">Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Total: ${getTotal()}</h2>
            <button className="border p-4">Checkout</button>
        </div>
    )
}

export default Cart;