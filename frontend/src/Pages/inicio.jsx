import Producto from "../components/button"
import Nav from "../components/nav"

function Inicio () {
    return(
        <>
        <Nav />
        <h1 className="text-xl text-center my-4">Inicio</h1>
        <div className="bg-blue-400 h-32 w-fit p-8 my-4">
            
            <Producto />
        </div>

        </>
    )
}
export default Inicio