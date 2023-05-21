'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var UsuarioSchema = new Schema(
    {
        nombre: String,
        rol: String,
        correo: String,
        password: String,
        cunple: Date
    }
)
module.exports = mongose.model('Usuario', UsuarioSchema); 