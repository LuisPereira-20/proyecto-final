import { Link } from "react-router-dom"
function Nav() {
    return(
        <>
        <nav>
            <div class="bg-blue-400 h-[90px] w-full p-4 grid grid-cols-3 sticky  z-10 lg:place-items-center lg:grid-cols-4 lg:h-24" >
                <div className="max-md:hidden">
                <Link to="/"><img src="./assets/images/home.jpeg" alt="" className="h-16 w-16 p-4 object-cover rounded-lg shadow-lg max-md:hidden"/></Link>
                </div>
                <div>
                <Link to="/login"><button id="Iniciar" className="bg-gray-200 rounded-xl h-fit w-fit p-2 text-center justify-self-center font-bold hover:bg-gray-400 lg:w-1/2 h-10 lg:font-bold" >Iniciar Sesión</button></Link> 
                </div>
                <input type="text"
                placeholder="Buscar"
                className="rounded-xl h-12 w-full p-3" />
                <div className="justify-self-end">
                <Link to="/carrito"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10 justify-self-end cursor-pointer">
                    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                </Link>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Nav