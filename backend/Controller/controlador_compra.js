import Compra from "../Model/Modelo_compra.js";
import Usuario from "../Model/modelo_usuario.js";
import producto from "../Model/Modelo_producto.js";
import opciones from "../Tools/opciones.js";

export const getCompras = async (req, res) => {
    try {
        opciones.page = (req.query.page) || 1;
        opciones.limit = (req.query.limit) || 12;
        const compras = await Compra.find();
        res.json(compras);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const postCompras = async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.body.usuario);
        if(!usuario){
            return res.status (404).json({error : "El usuario no existe"});
        }
        const Producto = await chequeoProductos(req.body.producto);
        if(Producto){
            return res.status (404).json({error : "El producto no existe"});
    }
        const compra = new Compra(req.body);
            await compra.save();
            const compra_paginate = await Compra.paginate({id : compra._id, eliminado : false}, opciones);
            res.status(200).json(compra_paginate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const editarCompras = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        const compra = await Compra.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, 
            req.body, 
            {new : true});
        const compra_paginate = await Compra.paginate({id : compra._id, eliminado : false}, opciones);
        res.status(200).json(compra_paginate);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const borrarCompras = async (req, res) => {
    try {
        const compras = await Compra.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, 
            {eliminado : true, fechaEliminacion : Date.now()}, 
            {new : true});
        res.status(200).json(compras);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const getComprasId = async (req, res) => {
    try {
        const compras = await compra.paginate({_id: req.params.id, eliminado : false}, opciones);
        res.json(compras);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const chequeoProductos = async (array) => {
    const soloIDs = array.map((obj) => obj._id);
    const records = await producto.find({ '_id': { $in: soloIDs } });
    if (!records.length || records.length !== soloIDs.length) {
      return "Productos no encontrados, chequea el IDs";
    }
}