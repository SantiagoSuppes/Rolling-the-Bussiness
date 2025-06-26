import { useEffect, useState } from "react";
import { useParams } from "react-router";
import  ItemDetail  from "./ItemDetail.jsx";


const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    
    const {id, categoryId}  = useParams();
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    useEffect(() => {
        fetch( url )
            .then(res => res.json())
            .then(res => {
                setItem(res)})

            
    }, [id]);
    

    return (
        
        <ItemDetail item={item} />
        
    );
}

export default ItemDetailContainer;