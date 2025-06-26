import { useState } from 'react';
import { CartContext } from './CartContext.js';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    let acum = 0;
    function getQuantity() {
        cart.forEach(product => {
            acum += product.quantity;
        });
        return acum;
    }

    let total = 0;
    function getTotal() {
        cart.forEach(product => {
            total += product.price;
        });
        return total;
    }

    return (
        <CartContext.Provider value={{cart, addToCart, getQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;