function NavAdmin({text = "Administrador"}) {
    return (
        <div className="grid grid-cols-4 p-4 bg-blue-400 w-full h-28">
            <div>
                <img src="../assets/images/pngwing.com.png" alt="" className="w-24 h-20"/>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default NavAdmin