import CartWidget from "./CartWidget";


const NavBar = () => {
    
    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-28">

            <div className="flex-none">
                <img src="src/assets/RtB-logo.png" className="w-20 h-12 xs:w-28 xs:h-14 sm:w-36 sm:h-18 md:w-52 md:h-23 lg:w-66 lg:h-28 items-center ml-2 max-w-120 cursor-pointer"></img>
            </div>

            <div className="flex-grow">
                <ul className="group relative flex justify-self-start items-center cursor-pointer p-2 text-amber-900 text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white tracking-wide font-semibold transition-all rounded-2xl">CATEGORÍAS DE PRODUCTOS

                    <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-neutral-700 rounded text-white text-left z-10 transition-all">
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

            </div>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;