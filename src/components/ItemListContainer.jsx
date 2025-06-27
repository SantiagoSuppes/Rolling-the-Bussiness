import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
    let [items, setItems] = useState([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const catSlug = queryParams.get("categorySlug");
    
    const url = 'https://api.escuelajs.co/api/v1/products';
    const urlCat =`https://api.escuelajs.co/api/v1/products/?categorySlug=${catSlug}`;

    useEffect(() =>{

        fetch(catSlug? urlCat : url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(err => console.log("Error", err));

    }, [catSlug])
    
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-8 my-16'>
            <ItemList items={items} />
        </section>
    );
};

export default ItemListContainer;