'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var UsuarioSchema = new Schema(
    {
        nombre: String,
        correo: String,
        password: String,
        cunple: String
    }
)
module.exports = mongose.model('Usuario', UsuarioSchema); 