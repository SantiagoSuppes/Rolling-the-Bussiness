import ItemDetailContainer from "./ItemDetailContainer";

const ItemList = ({ items }) => {
    return (
        items.map(item =>(
            
            <ItemDetailContainer key={item.id} product={item}/>
            
        ))
    );
}

export default ItemList;