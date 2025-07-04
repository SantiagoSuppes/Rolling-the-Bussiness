import { useState, useEffect } from "react";
import { Link } from "react-router";
import CartWidget from "./CartWidget.jsx";
import Logo from "./Logo.jsx";
import DropdownMenu from "./DropdownMenu.jsx";


const NavBar = () => {
    return (
        <nav className="bg-amber-400/90 flex items-center px-2 py-4 text-center max-h-26 sm:gap-2 md:gap-6">

            <Logo/>

            <DropdownMenu/>

            <CartWidget/>

        </nav>
    );
};

export default NavBar;