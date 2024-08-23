import { useState } from "react";
function Recuperacion({event=() => {alert("Codigo enviado");}, text="Ingresa tu correo"}) {
    const [email, setEmail] = useState("")

    const handleChange = () => {
        alert("Codigo enviado");
        setEmail("")
    }

    const handleinput = (e) => {
        setEmail(e.target.value)
    }
    return (
        <>
            <div className="bg-blue-400 rounded-xl p-4 flex flex-col justify-self-center gap-4 my-8 mx-8 w-96 h-54 gap-4">
                <h2 className="text-center font-bold">{text}</h2>
                <input type="email" 
                value={email}  placeholder=" Ingresa tu correo" className="rounded-xl h-10" onChange={handleinput}/>
                <button className="bg-gray-200 rounded-xl h-10 w-36 p-4  place-self-center place-items-center font-bold hover:bg-gray-400" 
                onClick={handleChange}>Enviar Codigo</button>
            </div>
        </>        
    )
}

export default Recuperacion