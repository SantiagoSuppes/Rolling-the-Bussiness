function ItemDetail ({item}) {

    return (
        <div className="flex flex-col bg-white rounded-2xl max-h-64 items-center truncate">
            <img src={item.thumbnail} alt="foto" className="p-0 size-fit max-h-48 rounded-t-2xl"/>
            <div className="flex flex-col items-center bg-amber-100/50 w-full border-t-2 border-amber-800">
                <h2 className="m-1 font-bold"> 
                    {item.title} 
                </h2>
                <p className="m-1">
                    Precio: ${item.price}
                </p>
            </div>
            
        </div>
    );
}

export default ItemDetail;