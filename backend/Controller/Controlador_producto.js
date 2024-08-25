import producto from "../Model/Modelo_producto.js";
import Categorias from "../Model/Modelo_categorias.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";
import Producto from "../Model/Modelo_producto.js";

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

export const submitImg = async (req, res) => {
    try {
        console.log(req.files);
        if(req.files.length === 0){
        return res.status(500).json({message: "images not found"});
    }
    const imgsArray = [];
    req.files.map((file) => {
        if(file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/jpeg"){
            return res.status(500).json({message: `image, ${file.filename}, not valid, only png, jpg and jpeg allowed`});
        }
        if(file.size > 5000000 || file.size === 0){
            return res.status(500).json({message: `image, ${file.filename}, not valid, max 5MB allowed and not empty`});
        }
        imgsArray.push(file.path);
    });
        const product = await Producto.findByIdAndUpdate({_id: req.params.id, deleted: false}, {images: imgsArray}, {new: true});
        const paginated = await product.paginate({_id: product._id, deleted: false}, options);
        res.status(201).json(paginated);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
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

