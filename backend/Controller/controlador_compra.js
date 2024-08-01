import compra from "../Model/Modelo_compra.js";
import usuario from "../Model/modelo_usuario.js";
import producto from "../Model/Modelo_producto.js";
import opciones from "../Tools/opciones.js";

export const getCompras = async (req, res) => {
    try {
        opciones.page = numero(req.query.page) || 1;
        opciones.limit = numero(req.query.limit) || 12;
        const compras = await compra.find();
        res.json(compras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const postCompras = async (req, res) => {
    try{
        const Usuario = await usuario.findById(req.body.usuario);
        if(!Usuario){
            return res.status (404).json({error : "El usuario no existe"});
        }
        const Producto = await producto.findById({_id: {$in : req.body.Producto} });
        if(Producto.length !== req.body.Producto.length){
            return res.status (404).json({error : "El producto no existe"});
    }
        const Compra = new compra(req.body);
            await Compra.save();
            const compra_paginate = await compra_paginate.paginate({id : compra._id, eliminado : false}, opciones);
            res.status(200).json(compra_paginate);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const editarCompras = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        const compra = await compra.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, req.body, {new : true});
        const compra_paginate = await compra_paginate.paginate({id : compra._id, eliminado : false}, opciones);
        res.status(200).json(compra_paginate);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const borrarCompras = async (req, res) => {
    try{
        req.body.eliminado = true;
        const compras = await compra.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, {eliminado : true, fechaEliminacion : Date.now()}, {new : true});
        res.status(200).json(compras);
    } catch (error) {
        res.status(404).json({ error: error.message });
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
