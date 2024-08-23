import Nav from "../components/nav";
import Footer from "../components/footer";
import Car from "../components/Car";

function Carrito() {
    return (
        <>
        <div className=" top-0 left-0 right-0 bottom-0 bg-gray-200 ">
            <Nav />
        </div>
        <div className="h-screen">
            <h1 className="font-bold text-2xl p-8">Carrito de compras</h1>
            <div className="mx-16 p-8">
                <Car />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default Carrito