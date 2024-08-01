const regex = {
    nombre: /^[A-Za-z\s]{3,50}$/,
    apellido: /^[A-Za-z\s]{3,50}$/,
    descripcion : /^[A-Za-z0-9\s{2.500}]$/,
    correo: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    contraseña : /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
}

regex.nombre = new RegExp(regex.nombre, "i")
regex.apellido = new RegExp(regex.apellido, "i")
regex.descripcion = new RegExp(regex.descripcion, "i")
regex.correo = new RegExp(regex.email, "i")
regex.contraseña = new RegExp(regex.password, "i")

const validar = (data) => {
    if (!regex.name.test(data.name) || !regex.apellido.test(data.apellido)
        || !regex.description.test(data.description) 
    || !regex.email.test(data.email) || !regex.contraseña.test(data.password))
    {
        return false;
    }
    return true;
};
regex.validar = validar

export default {regex, validar }; // exportar el objeto regex;
