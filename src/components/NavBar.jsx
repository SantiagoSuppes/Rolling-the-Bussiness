import CartWidget from "./CartWidget";


const NavBar = () => {
    
    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-26 gap-1">

            <div className="flex-none w-25 xs:w-30 sm:w-35 md:w-45 lg:w-60">
                <img src="src/assets/RtB-logo.png" className="size-fit ml-0 xs:ml-0.5 cursor-pointer"></img>
            </div>

            <div className="flex-grow">
                <ul className="group relative flex justify-self-start items-center cursor-pointer p-2 text-amber-900 text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white tracking-wide font-semibold transition-all rounded-2xl">CATEGORÍAS DE PRODUCTOS

                    <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-amber-900 rounded text-white text-left z-10 transition-all">
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Autos</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Motos</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
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