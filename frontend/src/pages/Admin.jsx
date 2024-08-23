import Bar from "../components/navbar"

function Admin() {
    return (
        <>
        <div className="flex flex-col justify-self-center items-center h-screen">
        <div>
            <Bar />
        </div>
        <div className="bg-blue-400 rounded-xl p-4 flex justify-center items-center h-96 w-96 gap-4 my-8">
            <div className="place-self-center text-center items-center gap-4 "> 
            <h2 className="text-center font-bold">Administrador</h2>
            <h4 className="text-center">Bienvenido</h4>
            </div>
        </div>
        </div>
        </>
    )
}

export default Admin