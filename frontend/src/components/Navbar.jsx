import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-blue-400 bg-navbar items-center flex justify-center md:justify-between p-4 sticky top-0 z-50">
            <span className=" font-bold text-2xl hidden md:block">FarmamigoIV</span>
            <div className="flex gap-4">
                <Link className="font-bold text-lg hover:text-gray-600" to="/">Home</Link>
                <Link className="font-bold text-lg hover:text-gray-600" to="/productos">Productos</Link>
            <span className="font-bold text-lg hover:text-gray-600">Contacto</span>
            <>
                <Link className="font-bold text-lg hover:text-gray-600" to="/login">Login</Link>
                <Link className="font-bold text-lg hover:text-gray-600" to="/registro">Registro</Link>
            </>
            </div>
        </nav>
    )
}
export default Navbar