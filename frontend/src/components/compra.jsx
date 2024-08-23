function Compra() {
    return (
        <>
        <div className="col-span-9">
            <img src="./assets/images/home.jpeg" alt="" className="w-full h-96 object-cover rounded-lg shadow-lg " />
        </div>
            <div className="col-span-3 items-center justify-center max-md:flex max-md:flex-col max-md: w-">
                <div className="grid grid-cols-1 gap-4 bg-blue-400 p-4 rounded-xl items-center">
                    <h2 className="font-bold">Producto</h2>
                    <h2 className="font-bold">Precio</h2>
                    <div className="flex gap-16">
                        <button className="font-bold bg-gray-200 rounded-xl h-6 w-6">+</button>
                        <button className="font-bold bg-gray-200 rounded-xl h-6 w-6">-</button>
                    </div>
                    <button id="comprar" 
                    className="bg-gray-200 rounded-xl h-10 w-24 p-2 place-self-center font-bold hover:bg-gray-400 " >Añadir al carrito</button>
                </div>
            </div>
        </>
    )
}

export default Compra