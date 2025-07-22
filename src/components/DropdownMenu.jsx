import { useEffect, useState, useRef, use } from "react";
import { NavLink } from "react-router-dom";
import { getItems } from "../firebase/firebase";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null); 

  const handleToggle = () => setIsOpen(prev => !prev);

  useEffect(() => {
      getItems().then(res => {
        const uniqueCategories = [...new Set(res.map(item => item.category))];
      setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

  return (
    <div className="flex-grow" ref={menuRef}>
      <ul
        onClick={handleToggle}
        className={`group relative flex justify-self-start items-center cursor-pointer py-1 font-semibold ${isOpen? 'text-white' : 'text-amber-900'} text-sxs sm:text-xs md:text-sm lg:text-base hover:text-white border-t tracking-wide transition-all`}
      >
        CATEGORIES

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col absolute top-full bg-amber-900 rounded text-white text-left z-10 transition-all font-medium`}
        >
          {categories.map((cat) => (
            <NavLink
              to={`/products/?categoryName=${cat}`}
              key={cat}
              className="px-8 py-3 active:bg-amber-800 hover:bg-amber-800 transition-colors capitalize"
            >
              {cat}
            </NavLink>
          ))}
        </ul>
      </ul>
    </div>
  );
}

// <div> es caja en navbar que contiene --> <ul> "products categories", que contiene --> <ul> lista de categories con cada NavLink.