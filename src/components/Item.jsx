import { useNavigate } from "react-router";

const Item = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className="shadow-2xl rounded-2xl">
            
            <img src={product.images} alt="foto" className="p-0 size-fit rounded-t-2xl"/>

            <div className="flex flex-col justify-start p-2 gap-2">

                <p className="text-lg"> {product.title} </p>

                <span className="border border-amber-900 text-amber-800 rounded-4xl flex justify-center w-fit text-sm p-1.5">{product.category.name}</span>

            </div>

            <div className="flex justify-between items-center px-4 py-2">

                <p>Price: $<span className="font-semibold">{product.price}</span></p>

                <button className="py-1 px-2 border rounded-2xl cursor-pointer hover:bg-amber-100" onClick={() => navigate(`/products/${product.id}`)}>Ver mas</button>

            </div>
            
        </div>
    )
}

export default Item;