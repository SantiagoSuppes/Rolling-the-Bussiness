import { useNavigate } from 'react-router';

const Checkout = ({ opId, handler }) => {

    const navigate = useNavigate();

    return (
        <>
        {opId? (
            <div className="flex flex-col gap-8 justify-center font-bold">
                <h1 className="flex justify-center text-3xl rounded-2xl bg-amber-300/60 p-6  m-8 text-center  shadow-2xl text-amber-900">Thank you for your purchase!</h1>
                <h2 className='flex justify-center text-amber-900 text-lg'>Operation ID: {opId}</h2>
                <button className="rounded-2xl p-4 self-center text-white bg-amber-900 hover:cursor-pointer active:bg-amber-400 shadow-2xl" onClick={() => navigate(`/`)}>
                Back to home
                </button>            
            </div>
        ):
        (
        <form className="flex flex-col justify-center items-center w-auto my-16 md:mx-24 py-8 gap-8 border-t-4 rounded-b-2xl shadow-2xl text-amber-900 " onSubmit={handler}>
            <div className="bg-amber-100 h-10 flex w-full justify-center items-center" id='formTitle'>
                <h1 className="text-3xl text-amber-950 tracking-wide bg-zinc-200 px-6 h-full rounded-3xl text-shadow-md">Checkout</h1>
            </div>

            <div className="flex flex-col shadow-xl min-w-1/4">
                <label htmlFor="enterprise" className="font-semibold">Enterprise</label>
                <input type="text" required className="border p-3 rounded-lg" id='enterprise' name='enterprise' autoComplete='enterprise'/>                
            </div>

            <div className="flex flex-col shadow-xl min-w-1/4" >
                <label htmlFor="email" className="font-semibold">Email adress</label>
                <input type="email" required className="border p-3 rounded-lg" id='email' name='email' autoComplete='email'/>
            </div>

            <div className="flex flex-col shadow-xl min-w-1/4">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" required className="border p-3 rounded-lg" id='name' name='name' autoComplete='name'/>                
            </div>

            <div className="flex flex-col shadow-xl min-w-1/4" >
                <label htmlFor='phone' className="font-semibold">Phone number</label>
                <input type="tel" required className="border p-3 rounded-lg" id='phone' name='phone' autoComplete='phone'/>
            </div>

            <button type="submit" className="text-white font-semibold py-2 px-8 shadow-xl bg-amber-900 rounded-2xl cursor-pointer">Buy</button>

        </form>
        )
        }
        </>
    )
}

export default Checkout;