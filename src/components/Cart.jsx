import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import { useEffect } from "react";


const Cart = () => {
    const { cart, getTotal, removeFromCart } = useContext(CartContext);
    console.log(cart)

    useEffect(() => {

    }, [cart])
    
    if (cart.length < 1) {
        return (<h1 className="flex justify-center p-6 text-2xl rounded-2xl bg-amber-300/60 m-8 text-center font-bold text-amber-900 shadow-2xl">No tienes elementos en el carrito.</h1>)
    }
    return(
        <div className="flex flex-col gap-6 m-6 rounded-b-2xl shadow-2xl items-center p-4 border-t-4 border-amber-900 h-auto">
            <h1 className="text-3xl text-amber-950 tracking-wide">Products cart</h1>
            <ul className="flex flex-col gap-6 items-center w-3/4 h-auto">
                {cart.map(item => (
                    <li key={item.id} className="flex flex-col md:flex-row md:justify-between bg-amber-100/40 rounded shadow-lg w-full md:max-h-36 overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:max-w-3/4 text-center pt-2 md:p-0">
                            <img src={item.images[0]} alt="foto" className="size-32 md:w-auto md:h-full shadow-2xl object-contain"></img>
                            <p className="text-xs md:text-lg">{item.title} X {item.quantity}</p>
                        </div>

                        <div className="flex gap-4 items-center mx-8 justify-between pb-2">
                            <p className="text-xs md:text-lg">$<span className="text-xs md:text-lg">{item.price}</span></p>
                            <button onClick={() => removeFromCart(item)} className="max-w-fit text-xl font-bold tracking-wide cursor-pointer text-red-600 px-1 text-shadow-lg">
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h1 className=" md:text-xl">Total: <span className="font-bold text-2xl">${getTotal()}</span></h1>
            <button className="p-4 rounded-xl bg-amber-800 text-white font-bold cursor-pointer shadow-lg active:bg-amber-400 text-xs md:text-lg">Checkout</button>
        </div>
    )
}

export default Cart;