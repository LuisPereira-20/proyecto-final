import Nav from "../components/nav"
import Footer from "../components/footer";
import Tabla from "../components/informacion";
import Compra from "../components/compra";

function Producto() {
    return (
        <>
        <div className=" top-0 left-0 right-0 bottom-0 bg-gray-200">
            <Nav />
        </div>
        <div className="grid grid-cols-12 gap-4 py-8 bg-gray-200 mx-4 max-md:grid-cols-1 ">
            <Compra />
        </div>
        <div >
            <Tabla />
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default Producto;