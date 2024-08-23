import { Link } from "react-router-dom";

function Exhibicion({event = () => {}}) {
    return (
    <Link to = "producto">
            <div id="exhibidor"
            class="bg-blue-400  w-full h-32 rounded-xl p-4 gap-4 flex flex-col my-2 mx-2 max-md:fit">
            <p className="text-2xl place-self-center text-center">Producto</p>
            <div className="place-self-center">
            <button className="bg-gray-200 rounded-xl h-10 w-24 p-2 font-bold text-center hover:bg-gray-400" event={() => {}}>Añadir</button>
            </div>
            </div>
            </Link>
            
        )
}
export default Exhibicion;