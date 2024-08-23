import producto from "../Model/Modelo_producto.js";
import Categorias from "../Model/Modelo_categorias.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";
import mongoose from "mongoose";

export const getProductos = async (req, res) => {
    try {
    opciones.page = numero(req.query.page) || 1;
    opciones.limit = numero(req.query.limit) || 12;
    const Productos = await producto.paginate({eliminado : false} , {select : 'nombre precio'}, opciones);
    res.status(200).json(Productos);
}  catch (error) {
    res.status(500).json({ error : 'Error al obtener los productos' });
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
        const {categoria, nombre, descripcion, ...rest } = req.body;
        if (!regex.nombre.test(nombre)){
            return res.status(400) .json({ error : "El nombre no es valido" });
        }
        if  (!regex.descripcion.test(descripcion)){
            return res.status(400) .json({ error : "La descripcion no es valida" });
        }
        console.log('valor de la categoria ', categoria);
        if(!mongoose.Types.ObjectId.isValid(categoria)){
            return res.status(400).json({ error : "ID categoria no valido" });
        }
        const categoriaExistente = await Categorias.findOne({ _id : categoria.id , eliminado : false});
        if (!categoriaExistente){
            return res.status(400).json({ error : "La categoria especificada no existe" });
        }
        const Productos= new producto(req.body);
        await Productos.save();
        res.status(201).json({
            message : 'Producto creado correctamente',
            id : Productos.id,
            nombre : Productos.nombre,
            precio : Productos.precio,
            categoria : Productos.categoria
        });} 
        catch (error) {
        res.status(500).json({ error : 'Error al registrar el producto' });
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
    const producto = await producto.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, req.body, {new : true});
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

