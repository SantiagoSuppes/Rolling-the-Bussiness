import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    
    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-26 gap-1">

            <Logo/>

            <div className="flex-grow">

                <ul className="group relative flex justify-self-start items-center cursor-pointer p-2 text-amber-900 text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white tracking-wide font-semibold transition-all rounded-2xl">PRODUCTS CATEGORIES

                    <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-amber-900 rounded text-white text-left z-10 transition-all">
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Clothes</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Shoes</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Electronics</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Furniture</a>
                        </li>
                        <li className="px-8 py-3 hover:bg-amber-800 transition-colors">
                            <a href="#">Miscellaneous</a>
                        </li>
                    </ul>

            </ul>

            </div>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;