/*
Un Usuario tiene los siguientes atributos:
    - Nombre
    - Apellido
    - Email
    - Contraseña
    - Rol
    -Telefono
    -imagen
    -fecha de creacion
    -fecha de actualizacion
    -Fecha de eliminacion
    -Eliminado
    -Compras
    -Carrito de compras
*/

import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import validacion from "../Tools/validacion.js";
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 50,
        match : validacion.nombre
    },
    apellido : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 50,
        match : validacion.apellido
    },
    correo : {
        type : String,
        required : true,
        unique : true,
        match : validacion.correo
    },
    contraseña : {
        type : String,
        required : true,
        maxLength : 20
    },
    telefono : {
        type : String,
        required : true
    },
    rol : {type: Schema.Types.ObjectId, ref: 'Rol', default: null},
    
    imagen: {
        type : Array,
        
    },
    fechaCreacion: {
        type : Date,
        required : true,
        default : Date.now
    },
    fechaActualizacion: {
        type : Date,
        required : true,
        default : Date.now
    },
    fechaEliminacion: {
        type : Date,
        required : true,
        default : null
    },
    eliminado: {
        type : Boolean,
        default : false
    },
    compras: {
        type : [Schema.Types.ObjectId], ref: 'Compras',
        default : [],
    },
    carrito: {
        type : Array,
        default : []
    }
});
usuarioSchema.plugin(mongoosePaginate);

const Usuario = mongoose.model('Usuario', usuarioSchema);

Usuario.paginate().then({});

export default Usuario