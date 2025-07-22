import { serverTimestamp } from 'firebase/firestore';
import { useCart } from '../context/useCart.js';
import { createOrder } from '../firebase/firebase.js';
import { ToastContainer, toast } from "react-toastify";
import { useState } from 'react';
import  Checkout from './Checkout.jsx';

const CheckoutContainer = () => {
    const { cart, emptyCart } = useCart();
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;
        const enterprise = form.email.value;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;

        const order = {
            user: {enterprise, email, name, phone},
            items: cart, 
            time: serverTimestamp(),
        }

        try {
            const id = await createOrder(order);
            setOrderId(id);
            toast.success(`Tu compra fue realizada exitosamente!`);
            emptyCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
            toast.error("Hubo un error al procesar tu orden.");
        }
    }

    return (
        <>
            <Checkout opId={orderId} handler={handleSubmit}/>
            <ToastContainer/>
        </>
    )
}

export default CheckoutContainer;