'use strict'

var express = require('express');
var Peli = require('../controller/pelicula');
var User = require('../controller/user');
var Vistas = require('../controller/vistas');
var route = express.Router();

//rutas para ejecutar los metodos de pelicula(controller)
route.post('/add', Peli.save);
route.post('/addone', Peli.saveone);
route.get('/getall', Peli.getPelis);
route.get('/getone', Peli.getRandom);
route.get('/getCate/:cate',  Peli.getCate);
route.get('/getoneCate/:cate', Peli.getRandomCate);
route.get('/getid/:id', Peli.getPelisId);
route.delete('/delete/:id', Peli.delete);


//rutas para ejecutar los metodos de usuario(controller)
route.post('/adduser', User.saveuser);
route.get('/getuser', User.getUser);
route.get('/getoneuser/:id', User.getOneUser);
route.post('/getuseremail', User.getUserEmail);
route.delete('/deleteuser/:id', User.delete);

//rutas para ejecutar los metodos de usuario(controller)
route.post('/addvista', Vistas.savevista);

module.exports = route;


