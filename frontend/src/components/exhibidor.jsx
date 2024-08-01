function Exhibicion() {
    return(
    <div id="exhibidor"
    class="bg-blue-400 rounded-xl h-24px w-36px p-4 gap-4 grid place-items-center my-5" >
        <p className="text-2xl">Producto</p>
        <button id="añadir" className="bg-gray-200 rounded-xl h-4px w-12px p-2 hover:bg-gray-400">Añadir</button>
    </div>
    )
}
export default Exhibicion;