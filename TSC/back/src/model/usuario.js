'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var UsuarioSchema = new Schema(
    {
        nombre: String,
        apellido: String,
        cunple: Date,
        password: String,
        correo: String,
        telefono: Number,
        pais: String
    }
)
module.exports = mongose.model('Usuario', UsuarioSchema); 