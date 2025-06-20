import { useEffect, useState } from "react";
import  ItemDetail  from "./ItemDetail.jsx";


const ItemDetailContainer = ({product}) => {
    const [item, setItem] = useState(product);

    useEffect(() => {
        //etItem().then((item) => setItem(item));
    }, []);
    

    return (
        
        <ItemDetail item={item} />
        
    );
}

export default ItemDetailContainer;