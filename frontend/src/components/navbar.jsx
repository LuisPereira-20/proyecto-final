import NavAdmin from "./AdminNav";
function Bar () {
    return (
        <div className="grid grid-cols-4 p-4 bg-blue-400 w-full h-fit">
            <NavAdmin text="Categorias"/>
            <NavAdmin text="Usuarios"/>
            <NavAdmin text="Productos"/>
            <NavAdmin text="Compras"/>
        </div>
    )
}

export default Bar