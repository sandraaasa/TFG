'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var PeliculaSchema = new Schema(
    {
        imdb_id: String,
        titulo: String,
        fecha: Date,
        categorias: [String],
        minutos: Number,
        pais: String,
        sinopsis: String,
        valoracionTotal: Number,
        poster: String
    }
)
module.exports = mongose.model('Pelicula', PeliculaSchema); 