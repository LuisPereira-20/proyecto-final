const Regex = {
    nombre: /^[A-Za-z\s]{3,50}$/,
    apellido: /^[A-Za-z\s]{3,50}$/,
    descripcion :/^[A-Za-z0-9\s\-_\+=~¡¿.,:;"]{2,500}$/,
    correo: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    contraseña : /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
}

Regex.nombre = new RegExp(Regex.nombre, "i")
Regex.apellido = new RegExp(Regex.apellido, "i")
Regex.descripcion = new RegExp(Regex.descripcion, "i")
Regex.correo = new RegExp(Regex.correo, "i")
Regex.contraseña = new RegExp(Regex.contraseña, "i")

const validar = () => {
    if (!Regex.name.test(data.nombre) || !Regex.apellido.test(data.apellido)
        || !Regex.descripcion.test(data.descripcion) 
    || !Regex.correo.test(data.correo) || !Regex.contraseña.test(data.contraseña))
    {
        return false;
    }
    return true;
};
Regex.validar = validar

export default Regex; // exportar el objeto regex;
