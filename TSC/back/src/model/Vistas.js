'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var VistasSchema = new Schema(
    {
        imdb_id: String,
        idU: String,
        cunple: Date,
        password: String,
        correo: String,
        telefono: Number,
        pais: String
    }
)
module.exports = mongose.model('Vistas', VistasSchema); 