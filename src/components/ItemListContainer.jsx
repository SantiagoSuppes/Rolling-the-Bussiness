import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    let [items, setItems] = useState([]);

    const getItems = () => fetch('https://api.escuelajs.co/api/v1/products');

    useEffect(() =>{

        getItems()
            .then(res => res.json())
            .then(data => {
                console.log("Datos obtenidos", data);
                setItems(data)})
            .catch(err => console.log(err));

    }, [])
    
    return (
       <ItemList items={items} />
    );
};

export default ItemListContainer;