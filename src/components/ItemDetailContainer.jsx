import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleItem } from "../firebase/firebase.js";
import  ItemDetail  from "./ItemDetail.jsx";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    
    const {id}  = useParams();

    useEffect(() => {
        getSingleItem(id).then(res => setItem(res))
    }, [id]);
    
    return (
        
        <ItemDetail item={item} />
    );
}

export default ItemDetailContainer;