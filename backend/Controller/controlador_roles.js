import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";
import rol from "../Model/modelo_rol.js";

export const getRoles = async (req, res) => {
    try {
        opciones.page = (req.query.page) || 1;
        opciones.limit = (req.query.limit) || 12;
        opciones.filtro;

        const Roles = await rol.paginate({}, opciones);
        res.status(201).json(Roles);
    } catch (error) {
        res.status(400).json({ error : 'Error al obtener los roles' });
    }
}

export const getRol = async (req, res) => {
    try {
    const id= req.params.id;
    const role = await rol.findbyId(id, {eliminado : false});
    if(!role) return res.status(404).json({ message : 'Rol no encontrado'});
    res.status(200).json(role);
} catch (error) {
    res.status(500).json({ error : 'Error al obtener el rol' });
}
}

export const postRol = async (req, res) => {
    try { 
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500) .json({ error : "El nombre no es valido" });
        }
        const role = new rol(req.body);
        await role.save();
        res.status(201).json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error : 'error al registrar el rol' });
    }
}

export const editarRol = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(400).json({ error : "El nombre no es valido" });
        }
        const rolupdate = await rol.findByIdAndUpdate
        ({ _id : req.params.id, eliminado : false},
        req.body, 
        {new : true});
        if(!rolupdate) {
            return res.status(404).json({ message : 'Rol no encontrado'});
        }
        res.status(201).json(rolupdate);
    } catch (error) {
        res.status(500).json({ error : 'error al editar el rol' });
    }
}

export const deleteRol = async (req, res) => {
    try{
        
        const role = await rol.findOneAndUpdate({ _id : req.params.id, eliminado : false},
            {$set : {eliminado : true, fechaEliminacion : Date.now()}}, 
            {new : true});
        if(!role){
        return res.status(404).json({ message : 'Rol no encontrado'});
        }
        res.status(200).json({ message : 'Rol eliminado'});
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}
