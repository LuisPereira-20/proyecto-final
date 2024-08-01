import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";
import rol from "../Model/modelo_rol.js";

export const getRoles = async (req, res) => {
    try {
        opciones.page = numero(req.query.page) || 1;
        opciones.limit = numero(req.query.limit) || 2;
        const Roles = await rol.paginate({eliminado : false} , opciones);
        res.status(200).json(Roles);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const getRol = async (req, res) => {
    try {
    const role = await rol.paginate({id : req.params.id, eliminado : false}, opciones);
    res.status(200).json(role);
} catch (error) {
    res.status(404).json({ error : error.message});
}
}

export const postRol = async (req, res) => {
    try { 
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500) .json({ error : "El nombre no es valido" });
        }
        const role = new rol(req.body);
        await rol.save();
        res.status(200).json(role);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const editarRol = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500).json({ error : "El nombre no es valido" });
        }
        const rol = await rol.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, req.body, {new : true});
        const Rol_paginate = await rol.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(Rol_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const deleteRol = async (req, res) => {
    try{
        req.body.eliminado = true;
        const rol = await rol.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, {eliminado : true, fechaEliminacion : Date.now()}, {new : true});
        const rol_paginate = await rol.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(rol_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}
