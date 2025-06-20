function ItemDetail ({item}) {
    return (
        <div className="flex gap-2 max-w-3xl my-10 m-auto shadow-2xl rounded-2xl p-4">
            
            <div className="flex flex-col gap-2 mr-2">
                <img src={item?.images[0]} alt="foto" className="size-fill rounded-xl"/>
                <img src={item?.images[1]} alt="foto" className="size-fill rounded-xl"/>
                {/* <img src={item?.images[2]} alt="foto" className="size-fill rounded-xl"/> */}

            </div>


            <div className="flex flex-col justify-between p-2 gap-2">

                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold mt-6"> {item?.title} </p>
                    <span className=" border-amber-900 text-amber-800 rounded-xl flex justify-center w-fit text-sm p-1.5">{item?.category.name}</span>
                    <p className="text-justify ml-2 mr-7"> {item?.description} </p>
                    <p className="text-lg ml-2 text-zinc-600">Price: <span className="font-semibold text-2xl text-black">${item?.price}</span></p>

                </div>
            
                <div className="flex items-end justify-between p-2">
                    <button className="py-1 px-2 border rounded-2xl cursor-pointer hover:bg-amber-100">Agregar</button>
                </div>

            </div>
            
        </div>
    )
}

export default ItemDetail;