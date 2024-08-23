import { useState } from "react"
import  {useNavigate} from 'react-router-dom'
function Register () {
    const[Formregister, setFormregister] = useState({
        Nombre: "",
        Apellido: "",
        email: "",
        Contraseña: "",
        Telefono: "",
    });
    const navigate = useNavigate();
    const handleChange = (event) => {
        setFormregister ({
            ...Formregister,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    try { 
        const response = await fetch('http://localhost:3001/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Formregister)
        });
        if (response.ok) {
            const data = await response.json();
            navigate('/login');
            console.log(data);
        } else {
            console.error('Error:', response.status);   
        }
    } catch (error) {
        console.log(error);
    }
    }
    return (
            <form onSubmit={handleSubmit} className="bg-blue-400 rounded-xl p-4 flex flex-col justify-self-center gap-4 my-8 mx-8 w-96 h-fit">
            <h2 className="text-center font-bold">Registrarse</h2>
            <h4 className="text-center">Ingresa tus datos</h4>
            <input type="text" 
            name="Nombre" 
            value={Formregister.Nombre} 
            placeholder=" Ingresa tu nombre" 
            className="rounded-xl h-10 p-2 my-1" 
            onChange={handleChange}/>
            <input type="text" 
            name="Apellido" 
            value={Formregister.Apellido} 
            placeholder=" Ingresa tu apellido" 
            className="rounded-xl h-10 p-2 my-1" 
            onChange={handleChange}/>
            <input type="email" 
            name="email" 
            value={Formregister.email} 
            placeholder=" Ingresa tu correo" 
            className="rounded-xl h-10 p-2 my-1" 
            onChange={handleChange}/>
            <input type="password" 
            name="Contraseña" 
            value={Formregister.Contraseña} 
            placeholder=" Ingresa tu contraseña" 
            className="rounded-xl h-10 p-2 my-1"
            onChange={handleChange} />
            <input type="text" 
            name="Telefono" 
            value={Formregister.Telefono}
            placeholder=" Ingresa tu telefono" 
            className="rounded-xl h-10 p-2 my-1"
            onChange={handleChange}/>
            <button type="submit" className="bg-gray-200 rounded-xl h-15 w-32 p-2 place-self-center font-bold my-1 hover:bg-gray-400 ">Iniciar Sesion</button>
            </form>
    )
}

export default Register