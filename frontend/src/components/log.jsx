import { Link } from "react-router-dom"

function Log(){
    return(
        <div className="bg-blue-400 rounded-xl p-4 flex flex-col justify-self-center gap-4 my-8 mx-8 w-96 h-96">
            <h2 className="text-center font-bold">Iniciar Sesion</h2>
            <h4 className="text-center">Ingresa tu correo y contraseña</h4>
            <input type="text" placeholder=" Ingresa tu correo" className=" h-20 rounded-xl"/>
            <input type="text" placeholder=" Ingresa tu contraseña" className=" h-20 rounded-xl"/>
            <div className="place-self-center">
            <Link to="/"><button className="bg-gray-200 rounded-xl h-15 w-32 p-2 place-self-center font-bold hover:bg-gray-400 ">Iniciar Sesion</button></Link>
            </div>
            <Link to="/recuperar_contraseña"><p className="text-center font-bold">Olvidaste tu contraseña?</p></Link>
            <p className="text-center">No tienes una cuenta?</p>
            <Link to="/Registro"><p className="font-black cursor-pointer text-center">Registrate</p></Link>
            <Link to="/Administrador_log"><p className="font-black cursor-pointer text-center">¿Eres Administrador?</p></Link>
        </div>
    )
}

export default Log