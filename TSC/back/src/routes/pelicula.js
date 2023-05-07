'use strict'

var express = require('express');
var Peli = require('../controller/pelicula');
var route = express.Router();

//rutas para ejecutar los metodos de pelicula(controller)
route.post('/add', Peli.save);
route.get('/getall', Peli.getPelis);
route.get('/getone', Peli.getRandom);
route.get('/getid/:id', Peli.getPelisId);
route.delete('/delete/:id', Peli.delete);

module.exports = route;


