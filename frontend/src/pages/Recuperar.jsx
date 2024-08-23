import Footer from "../components/footer"
import Nav from "../components/nav"
import Recuperacion from "../components/recuperacion"

function Recuperar() {
    return (
        <>
            <div>
                <Nav />
            </div>
            <div className="flex flex-col justify-self-center items-center h-screen">
                <Recuperacion />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Recuperar