import Item from "./Item.jsx";

const ItemList = ({ items }) => {

    const isValidProduct = (product) =>
        product.title && product.images?.length > 0 && product.images[0];

    const filteredProducts = items.filter(isValidProduct);

    return (
        filteredProducts.map(item =>(
            
            <Item key={item.id} product={item}/>            
            
        ))
    );
}

export default ItemList;