import { useEffect } from "react";
import ItemCount from "./ItemCount.jsx";

function ItemDetail ({item}) {

    return (
        <div className="flex flex-col md:flex-row gap-2 max-w-3xl my-10 m-auto shadow-2xl rounded-2xl p-4">
            
            <div id="carrusel" className="flex md:flex-col gap-2 md:mr-2 md:overflow-auto overflow-x-auto">
                {item?.images?.map(url => (
                    <img key={url} src={url} alt="foto" className="size-fit"></img>
                ))}
            </div>


            <div className="flex flex-col justify-between p-2 gap-2">

                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-semibold mt-6"> {item?.title} </p>
                    <span className=" border-amber-900 text-amber-800 rounded-xl flex justify-center w-fit text-sm p-1.5">{item?.category.name}</span>
                    <p className="text-justify ml-2 mr-7"> {item?.description} </p>
                    <p className="text-lg ml-2 text-zinc-600">Price: <span className="font-semibold text-2xl text-black">${item?.price}</span></p>

                </div>
            
                <div>
                    <ItemCount item={item}/>
                </div>

            </div>
            
        </div>
    )
}

export default ItemDetail;