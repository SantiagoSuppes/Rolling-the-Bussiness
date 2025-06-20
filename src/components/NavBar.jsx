import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import CartWidget from "./CartWidget.jsx";
import Logo from "./Logo.jsx";


const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-26 sm:gap-2 md:gap-6">

            <Logo/>

            <div className="flex-grow">

                <ul className="group relative flex justify-self-start items-center cursor-pointer p-2 text-amber-900 text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white tracking-wide transition-all rounded-2xl">PRODUCTS CATEGORIES

                    <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-amber-900 rounded text-white text-left z-10 transition-all font-medium">
                        <Link to={"/categories/1/products"} className="px-8 py-3 hover:bg-amber-800 transition-colors">Clothes</Link>
                        <Link to={"/categories/2/products"} className="px-8 py-3 hover:bg-amber-800 transition-colors">Electronics</Link>
                        <Link to={`/categories/3/products`} className="px-8 py-3 hover:bg-amber-800 transition-colors">Furniture</Link>
                        <Link to={`/categories/4/products`} className="px-8 py-3 hover:bg-amber-800 transition-colors">Shoes</Link>
                        <Link to={`/categories/5/products`} className="px-8 py-3 hover:bg-amber-800 transition-colors">Miscellaneous</Link>
                        <Link to={`/categories/6/products`} className="px-8 py-3 hover:bg-amber-800 transition-colors">Others</Link>
                    </ul>

                </ul>

            </div>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;