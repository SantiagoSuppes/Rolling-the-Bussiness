import { useState } from 'react';
import { CartContext } from './CartContext.js';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item !== product));
    }

    function getQuantity() {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    }

    function getTotal() {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    const emptyCart = () => {
        return setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, getQuantity, getTotal, removeFromCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;