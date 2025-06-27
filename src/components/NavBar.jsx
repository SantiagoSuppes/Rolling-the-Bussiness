import { useState, useEffect } from "react";
import { Link } from "react-router";
import CartWidget from "./CartWidget.jsx";
import Logo from "./Logo.jsx";


const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/categories`)
            .then(res => res.json())
            .then(res => setCategories(res))
    })

    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-26 sm:gap-2 md:gap-6">

            <Logo/>

            <div className="flex-grow">

                <ul className="group relative flex justify-self-start items-center cursor-pointer py-1 font-semibold text-amber-900 text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white border-t tracking-wide transition-all">PRODUCTS CATEGORIES

                    <ul className="hidden group-hover:flex flex-col absolute top-full w-[90%] bg-amber-900 rounded text-white text-left z-10 transition-all font-medium">
                        {categories.map(cat => (
                            <Link to={`/products/?categorySlug=${cat.slug}`} key={cat.id} className="px-8 py-3 hover:bg-amber-800 transition-colors">{cat.name}</Link>
                        ))}
                    </ul>

                </ul>

            </div>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;