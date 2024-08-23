import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";
import Categorias from "../Model/Modelo_categorias.js";
import mongoose from "mongoose";
const {Types : {ObjectId}} = mongoose;
export const getCategorias = async (req, res) => {
    try {
        opciones.page = (req.query.page) || 1;
        opciones.limit = (req.query.limit) || 12;
        const categoria = await Categorias.paginate({eliminado : false} , opciones);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const getCategoria = async (req, res) => {
    try {
        
        if(!ObjectId.isValid(req.params.id)){
            return res.status(400).json({ error : "ID categoria no valido" });
        }
    const categoria = await Categorias.findById(req.params.id).where('eliminado',false);
    if(!categoria){
        return res.status(500).json({ error : "error al obtener la categoria" });
    }
    res.status(200).json(categoria);
} catch (error) {
    res.status(404).json({ error : error.message});
}
}

export const postCategoria = async (req, res) => {
    try {
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(400) .json({ error : "El nombre no es valido" });
        }
        const categoria = new Categorias(req.body);
        await categoria.save();
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error : 'Error al registrar la categoria' });
    }
}

export const editarCategoria = async (req, res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({ error : "ID categoria no valido" });
        }
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(400).json({ error : "El nombre no es valido" });
        }
        const categoria = await Categorias.findByIdAndUpdate(req.params.id, {...req.body, fechaActualizacion : Date.now()}, {new : true});
        if(!categoria){
            return res.status(404).json({ error : "La categoria no existe" });
        }
        res.status(200).json(categoria);
    } catch (error) {
        if (error) {
            return res.status(400).json({ error : error.message});
        }
        else{
            return res.status(500).json({ error : 'Error al actualizar la categoria' });
        }
    }
}

export const deleteCategoria = async (req, res) => {
    try{
        const Categoria = await Categorias.findByIdAndUpdate({ _id : req.params.id, eliminado : false},
            {eliminado : true, fechaEliminacion : Date.now()},
            {new : true});
        if(!Categoria){
            return res.status(404).json({ error : "La categoria no existe" });
        }
        res.status(200).json({ message : "La categoria ha sido eliminada" });
    } catch (error) {
        res.status(500).json({ error : 'Error al eliminar la categoria' });
    }
}