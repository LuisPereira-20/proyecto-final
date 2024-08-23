import Nav from "../components/nav"
import Footer from "../components/footer"
import Exhibicion from "../components/exhibidor"

function Productos() {
    return (
        <>
        <div>
            <Nav />
        </div>
        <h1 className="text-center font-bold text-2xl p-4 my-2">PRODUCTOS</h1>
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
            <Exhibicion />
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default Productos