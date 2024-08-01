import producto from "../Model/Modelo_producto.js";
import Categorias from "../Model/Modelo_categorias.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";

export const getProductos = async (req, res) => {
    try {
    opciones.page = numero(req.query.page) || 1;
    opciones.limit = numero(req.query.limit) || 12;
    const Productos = await producto.paginate({eliminado : false} , opciones);
    res.status(200).json(Productos);
}  catch (error) {
    res.status(404).json({ error : error.message});
}
}

export const getProducto = async (req, res) => {
    try {
    const producto = await producto.paginate({id : req.params.id, eliminado : false}, opciones);
    res.status(200).json(producto);
}  catch (error) {
    res.status(404).json({ error : error.message});
}
}

export const postProducto = async (req, res) => {
    try {
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500) .json({ error : "El nombre no es valido" });
        }
            
        if  (!regex.descripcion.test(req.body.descripcion)){
            return res.status(500) .json({ error : "La descripcio no es valida" });
        }
        const categoria_Existente = await categoria.findById(req.body.categoria);
        if (!categoria_Existente){
            return res.status(404).json({ error : "La categoria no existe" });
        }
        const Producto= new producto(req.body);
        await producto.save();
        res.status(200).json(producto);} 
        catch (error) {
        res.status(404).json({ error : error.message});
        }
}

export const editarProducto = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500).json({ error : "El nombre no es valido" });
    }
    if  (!regex.descripcion.test(req.body.descripcion)){
        return res.status(500).json({ error : "La descripcio no es valida" });
    }
    const categoria_Existente = await Categorias.findById(req.body.categoria);
    if (!categoria_Existente){
        return res.status(404).json({ error : "La categoria no existe" });
    }
    const producto = await Producto.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, req.body, {new : true});
    const producto_paginate = await producto_paginate.paginate({id : req.params.id, eliminado : false}, opciones);
    res.status(200).json(producto_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const eliminarProducto = async (req, res) => {
    try {
        const Producto = await Producto.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, {eliminado : true, fechaEliminacion : Date.now()}, {new : true});
        const producto_paginate = await producto.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(producto_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

