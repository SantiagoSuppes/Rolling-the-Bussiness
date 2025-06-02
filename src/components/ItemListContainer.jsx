const ItemListContainer = ({ texto }) => {
    return (
        <div className='flex justify-center rounded-2xl bg-neutral-400 mx-4 my-2 sm:mx-8 sm:my-4 shadow-2xl'>
            <h2 className="font-[helvetica] font-bold p-3 text-lg xs:text-xl sm:text-2xl md:text-4xl text-white text-center" >{texto}</h2>
        </div>
    )
};

export default ItemListContainer;