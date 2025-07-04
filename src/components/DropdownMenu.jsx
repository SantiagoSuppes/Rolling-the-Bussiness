import { useEffect, useState, useRef, use } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const menuRef = useRef(null); // ← referencia al contenedor

  const handleToggle = () => setIsOpen(prev => !prev);

  // Fetch de categorías
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  // Cierre automático al hacer clic afuera
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
        PRODUCTS CATEGORIES

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col absolute top-full w-[90%] bg-amber-900 rounded text-white text-left z-10 transition-all font-medium`}
        >
          {categories.map((cat) => (
            <Link
              to={`/products/?categorySlug=${cat.slug}`}
              key={cat.id}
              className="px-8 py-3 active:bg-amber-800 hover:bg-amber-800 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </ul>
      </ul>
    </div>
  );
}
