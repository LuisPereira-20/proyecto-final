import Footer from "../components/footer"
import Nav from "../components/nav"
import Historial from "../components/Historial"

function Compras() {
    return (
        <>
        <div>
            <Nav />
        </div>
        <div className="h-screen">
            <h1 className="font-bold text-2xl p-8">Mis Compras</h1>
                <div className="mx-16 p-8">
                    <Historial />
                </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default Compras
