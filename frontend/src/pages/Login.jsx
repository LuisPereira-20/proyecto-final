import Footer from "../components/footer"
import Log from "../components/log"
import Nav from "../components/nav"

function Login() {
    return (
        <>
        <div className="flex flex-col">
            <div>
                <Nav />
            </div>
            <div>
                <h1 className="font-bold text-2xl p-8">Login</h1>
            </div>
            <div className="flex flex-col justify-self-center items-center h-screen">
                <Log />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </>
    )
}

export default Login