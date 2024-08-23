import { Link } from "react-router-dom"
function PerfilU({text}) {
    return (
    <div className="container bg-gray-200 h-screen">
        <div className="grid grid-cols-12 gap-4 py-8">
            <div className="col-span-5 border-2 ">
                <img src="./assets/images/home.jpeg" alt="" 
                className="w-48 h-48 p-4 object-cover rounded-lg shadow-lg max-md:hidden" />
                <div className="grid grid-cols-1 gap-4 p-4">
                        <h3 className="font-bold text-xl cursor-pointer" text={text}>Perfil</h3>
                        <div>
                            <Link to="/Compras" className="font-bold text-xl cursor-pointer">Mis Compras</Link>
                        </div>
                        <div>
                            <Link to="/Carrito" className="font-bold text-xl cursor-pointer">Carrito de Compras</Link>
                        </div>
                </div>
            </div>
        <div className="col-span-7">
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="w-full h-36 bg-blue-400 rounded-xl"></div>
            </div>
        </div>
    </div>
    </div>
)
}
export default PerfilU