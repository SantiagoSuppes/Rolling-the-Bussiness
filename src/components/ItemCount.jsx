import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.js";

const ItemCount = ( {item} ) => {
    const [counter, setCounter] = useState(0);
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => setCounter(counter + 1);
    const handleSub = () => setCounter(counter<1? counter : counter-1);
    const handleAddToCart = () => addToCart({...item, quantity: counter});

    return (
        <div className="flex items-center justify-end gap-3 w-full bg-amber-400/40">
            <div className="flex border rounded-xl border-amber-900 gap-0.5">
                <button onClick={handleSub} className="px-2 rounded-full size-6 cursor-pointer font-bold text-amber-800 hover:text-zinc-200">-</button>
                <p className="text-white font-bold">{counter}</p>
                <button onClick={handleAdd} className="px-2 rounded-full size-6 cursor-pointer text-sm font-bold text-amber-800 hover:text-zinc-200">+</button>
            </div>
            <button disabled={counter < 1} onClick={handleAddToCart} className="py-1.5 px-2 cursor-pointer bg-amber-400/65 text-amber-900 active:text-white disabled:bg-transparent active:bg-amber-400">Add to cart</button>
        </div>
    )
}

export default ItemCount;

//Eliminar elementos agregados al carrito duplicados.