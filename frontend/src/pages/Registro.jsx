import Register from "../components/registro"
import Footer from "../components/footer"
import Nav from "../components/nav"

function Registro() {
    return (
        <>
        <div className="flex flex-col">
            <div>
                <Nav />
            </div>
            <div>
                <h1 className="font-bold text-2xl p-8 ">Registrate</h1>
            </div>
            <div className="flex flex-col justify-self-center items-center h-screen">
                <Register />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}

export default Registro