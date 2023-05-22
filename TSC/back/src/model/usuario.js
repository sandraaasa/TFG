'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var UsuarioSchema = new Schema(
    {
        nombre: String,
        rol: String,
        correo: {
            type: String,
            required: true,
            unique:true
        },
        password: String,
        cumple: Date
    }
)
module.exports = mongose.model('Usuario', UsuarioSchema); 