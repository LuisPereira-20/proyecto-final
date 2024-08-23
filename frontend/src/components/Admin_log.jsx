import { Link } from "react-router-dom"

function AdminLog(){
    return(
        <div className="bg-blue-400 rounded-xl p-4 flex flex-col justify-self-center gap-4 my-8 mx-8 w-96 h-96">
            <h2 className="text-center font-bold">Iniciar Sesion</h2>
            <h4 className="text-center">Ingresa tu correo y contraseña</h4>
            <input type="text" placeholder=" Ingresa tu correo" className="rounded-xl h-10"/>
            <input type="text" placeholder=" Ingresa tu contraseña" className="rounded-xl h-10"/>
            <div className="place-self-center">
            <Link to="/Admin"><button className="bg-gray-200 rounded-xl h-15 w-32 p-2 place-self-center font-bold hover:bg-gray-400 ">Iniciar Sesion</button></Link>
            </div>
            <Link to="/recuperar_contraseña"><p className="text-center font-bold">Olvidaste tu contraseña?</p></Link>  
        </div>
)
}

export default AdminLog