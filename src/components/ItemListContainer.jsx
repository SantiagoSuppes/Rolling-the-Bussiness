import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { getItems, getItemsByCategory } from "../firebase/firebase.js";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get("categoryName");

    useEffect(() =>{
        if (categoryName) {
            getItemsByCategory(categoryName).then(res => setItems(res))
        } else {
            getItems().then(res => setItems(res))
        }

    }, [categoryName])
    
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-8 my-16 items-stretch'>
            <ItemList items={items} />
        </section>
    );
};

export default ItemListContainer;