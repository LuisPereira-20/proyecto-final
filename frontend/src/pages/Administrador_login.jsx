import Nav from "../components/nav";
import Footer from "../components/footer";
import AdLog from "../components/Admin_log";

function Administrador_log(){
    return(
        <>
            <div>
                <Nav />
            </div>
            <div className="flex flex-col justify-self-center items-center h-screen">
                <AdLog />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Administrador_log