import bcrypt from "bcrypt";
import Usuario from "../Model/modelo_usuario.js";
import rol from "../Model/modelo_rol.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js"; 
import Mongoose from "mongoose";

export const getUsuarios = async (req, res) => {
    try {
        const Usuarios = await Usuario.paginate({
            eliminado : false
        }, opciones);
        res.status(200).json(Usuarios);
    } catch (error) {
        res.status(400).json({ error : 'Error al obtener los usuarios' });
    }
}

export const getUsuario = async (req, res) => {
    try {
        const UsuarioId = req.params.id;
        if (!Mongoose.Types.ObjectId.isValid(UsuarioId)){
            return res.status(400).json({ error : 'ID Usuario no valido'});
        }
        const Usuario = await Usuario.findById(UsuarioId, opciones);
        if (!Usuario){
            return res.status(404).json({ error : 'Usuario no encontrado'});
        }
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const postUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, contraseña, rol } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);
        const role = await rol.findById(rol);
        if (!role){
            return res.status(404).json({ error : 'Rol no encontrado'});
        }
        const nuevoUsuario = new Usuario({
            nombre, 
            apellido, 
            correo, 
            contrasena : hashedPassword, 
            rol : role.nombre});
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error : 'Error al registrar el usuario' });
    }
}
        export const Actualizar_Usuario = async (req, res) => {
            try {
                req.body.fechaActualizacion = Date.now();
                if (!regex.nombre.test(req.body.nombre)){
                    return res.status(500) .json({ error : "El nombre no es valido" });
                }    
                if  (!regex.apellido.test(req.body.apellido)){
                    return res.status(500) .json({ error : "El apellido no es valido" });
                }
                if (!regex.correo.test(req.body.correo)){
                    return res.status(500) .json({ error : "El correo no es valido" });
                }
                const usuario = await Usuario.findByIdandUpdate({ _id : req.params.id, deleted : false}, req.body, {new : true});
                const Pagina_Usuario = await Usuario.paginate({id : usuario._id, eliminado : false}, opciones);
                return res.status(200).json(Pagina_Usuario);
            } catch (error) {
                res.status(404).json({ error : error.message});
            }
        }
            
            export const Eliminar_Usuario = async (req, res) => {
                try {
                    const usuario = await Usuario.findByIdandUpdate({ _id : req.params.id, deleted : true},{deleted : true, fechaEliminacion : Date.now()}, {new : true});
                    const Pagina_Usuario = await Usuario.paginate({id : usuario._id, eliminado : false}, opciones);
                    return res.status(200).json(Pagina_Usuario);
                } catch (error) {
                    res.status(404).json({ error : error.message});
                }
            }