import { useState, useEffect } from "react";

const ItemCount = () => {
    let [counter, setCounter] = useState(0);

    const handleAdd = () => setCounter(counter + 1);
    const handleSub = () => setCounter(counter - 1);

    useEffect(() => {
        return
    }, [counter]);

    return (
        <div className="flex items-center rounded-full bg-amber-400/40">
            <button onClick={handleSub} className="px-2 rounded-full size-6 cursor-pointer font-bold text-amber-800 hover:text-zinc-200">-</button>
            <p className="text-white font-bold">{counter}</p>
            <button onClick={handleAdd} className="px-2 rounded-full size-6 cursor-pointer text-sm font-bold text-amber-800 hover:text-zinc-200">+</button>
        </div>
    )
}

export default ItemCount;