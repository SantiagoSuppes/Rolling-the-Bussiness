
const Bienvenida = ({bienvenida}) => {
    return (
        <div className='justify-center rounded-2xl bg-amber-300/80 mx-4 my-4 sm:mx-12 shadow-2xl'>
            <h2 className="font-[helvetica] font-bold p-3 text-lg xs:text-xl sm:text-2xl md:text-4xl text-amber-950 text-center" >{bienvenida}</h2>
        </div>
    );
}

export default Bienvenida;