import bcrypt from "bcrypt";
import Usuario from "../Model/modelo_usuario.js";
import rol from "../Model/modelo_rol.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";

export const getUsuarios = async (req, res) => {
    try {
        const Usuario = await Usuario.paginate({
            eliminado : false
        }, opciones);
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const postUsuario = async (req, res) => {
    try {
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500) .json({ error : "El nombre no es valido" });
        }
            
        if  (!regex.apellido.test(req.body.apellido)){
            return res.status(500) .json({ error : "El apellido no es valido" });
        }

        if (!regex.correo.test(req.body.correo)){
            return res.status(500) .json({ error : "El correo no es valido" });
        }   

        if (!regex.contraseña.test(req.body.contraseña)){
            return res.status(500) .json({ error : "La contraseña no es valida" });
        }

        const cript = await bcrypt.genSalt(10);
        req.body.contraseña = await bcrypt.hash(req.body.contraseña, cript);

        const roles = await rol.findById(req.body.rol);

        if (!roles){
            return res.status(404).json({ error : "El rol no existe" });
        }

        req.body.rol = roles._id;

        const usuario = new Usuario(req.body);
        await usuario.save();
        const Pagina_Usuario = await Usuario.paginate({id : usuario._id, eliminado : false}, opciones);
        res.status(200).json(Pagina_Usuario);} 
        catch (error) {
        res.status(404).json({ error : error.message});
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