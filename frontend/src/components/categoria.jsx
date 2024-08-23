import { Link } from "react-router-dom";

function Nombre({text = "Categorias"}) {
    return (
        <div className="m-3 flex justify-between">
            <p className="text-2xl">{text}</p>
            <Link to="/Productos"><h5 className="font black cursor-pointer self-center">Ver mas</h5></Link>
        </div>
    )
}

export default Nombre;