'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var PeliculaSchema = new Schema(
    {
        idP: Number,
        titulo: String,
        studio: String,
        categorias: String,
        minutos: Number,
        pais: String,
        sinopsis: String,
        valoracionTotal: Number
    }
)
module.exports = mongose.model('Pelicula', PeliculaSchema);