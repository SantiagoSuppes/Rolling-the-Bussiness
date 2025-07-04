import Item from "./Item.jsx";

const ItemList = ({ items }) => {

    return (
        items.map(item =>(
            
            <Item key={item.id} product={item}/>            
            
        ))
    );
}

export default ItemList;