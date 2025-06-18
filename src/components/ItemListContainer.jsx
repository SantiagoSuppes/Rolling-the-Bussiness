import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    let [items, setItems] = useState([]);

    const getItems = () => fetch('https://dummyjson.com/products');

    useEffect(() =>{
        getItems()
            .then(res => res.json())
            .then(data => {
                console.log("Datos obtenidos", data.products);
                setItems(data.products)})
            .catch(err => console.log(err));

        
    }, [])
    
    return (
       <ItemList items={items} />
    );
};

export default ItemListContainer;