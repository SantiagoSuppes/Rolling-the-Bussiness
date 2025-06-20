import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
    let [items, setItems] = useState([]);
    const { categoryId }  = useParams();

    const url = 'https://api.escuelajs.co/api/v1/products';
    const urlCat =`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;

    useEffect(() =>{

        fetch(categoryId? urlCat : url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(err => console.log("Error", err));

    }, [categoryId])
    
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-8 my-16'>
            <ItemList items={items} />
        </section>
    );
};

export default ItemListContainer;