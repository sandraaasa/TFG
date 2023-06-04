'use strict'
const mongose = require('mongoose');
var Schema = mongose.Schema;

var VistasSchema = new Schema(
    {
        idUsu: String,
        idPeli: String,
        dia: Date
    }
)
module.exports = mongose.model('Vistas', VistasSchema); 