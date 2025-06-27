import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { useEffect } from "react";


const Cart = () => {
    const { cart, getTotal, removeFromCart } = useContext(CartContext);

    useEffect(() => {

    }, [cart])
    
    if (cart.length < 1) {
        return (<h1 className="flex justify-center p-6 text-2xl rounded-2xl bg-amber-300/60 m-8 text-center font-bold text-amber-900 shadow-2xl">No tienes elementos en el carrito.</h1>)
    }
    return(
        <div className="flex flex-col gap-6 m-6 rounded-b-2xl shadow-2xl items-center p-4 border-t-4 border-amber-900">
            <h1 className="text-3xl text-amber-950 tracking-wide">Products cart</h1>
            <ul className="flex flex-col gap-6 items-center w-3/4">
                {cart.map(item => (
                    <li key={item.id} className="flex justify-between bg-amber-100 rounded-2xl shadow-lg w-full p-4 items-center">
                        <p className="ml-2 text-lg">{item.title} X {item.quantity}</p>

                        <div className="flex gap-4 items-center">
                            <p>$<span className="text-lg">{item.price}</span></p>
                            <button onClick={() => removeFromCart(item)} className="max-w-fit text-xl font-bold tracking-wide cursor-pointer text-red-600 px-1 text-shadow-lg">
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h1 className="text-xl">Total: <span className="font-bold text-2xl">${getTotal()}</span></h1>
            <button className="p-4 w-1/5 rounded-xl bg-amber-800 text-white font-bold cursor-pointer shadow-lg active:bg-amber-400">Checkout</button>
        </div>
    )
}

export default Cart;