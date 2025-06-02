import CartWidget from "./CartWidget";


const NavBar = () => {
    
    return (
        <nav className="bg-neutral-500 grid grid-cols-3 justify-items-stretch items-center px-2 py-4 sm:px-8 text-center max-h-38">

            <div className="flex items-center col-start-1 col-end-2 rounded-2xl max-w-72">

                <img src="src/assets/RtB-logo.png" className="cursor-pointer h-full w-64"></img>

            </div>


            <ul className="group relative flex col-start-2 col-end-3 justify-self-start items-center max-h-2/4 cursor-pointer p-4 text-zinc-100 font-medium text-xs sm:text-sm md:text-base hover:text-white hover:bg-neutral-600/25 transition-all rounded-2xl tracking-wide">CATEGORIA DE PRODUCTOS

                <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-neutral-700 rounded shadow-lg text-white text-left z-10 transition-all">
                    <li className="px-8 py-3 hover:bg-neutral-600 transition-colors">
                        <a href="#">Autos</a>
                    </li>
                    <li className="px-8 py-3 hover:bg-neutral-600 transition-colors">
                        <a href="#">Motos</a>
                    </li>
                    <li className="px-8 py-3 hover:bg-neutral-600 transition-colors">
                        <a href="#">Utilitarios</a>
                    </li>
                </ul>

            </ul>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;