'use strict'

const express = require('express');
const Peli = require('../controller/pelicula');
const User = require('../controller/user');
const Vistas = require('../controller/vistas');
const route = express.Router();

//rutas para ejecutar los metodos de pelicula(controller)
route.post('/add', Peli.save);
route.post('/addone', Peli.saveone);
route.get('/getall', Peli.getPelis);
route.get('/getCate/:cate',  Peli.getCate);
route.get('/getone', Peli.getRandom);
route.get('/getoneCate/:cate', Peli.getRandomCate);
route.get('/getid/:id', Peli.getPelisId);
route.delete('/delete/:id', Peli.delete);


//rutas para ejecutar los metodos de usuario(controller)
route.post('/adduser', User.save);
route.get('/getuser', User.getUser);
route.get('/getoneuser/:id', User.getOneUser);
route.post('/getuseremail', User.getUserEmail);
route.delete('/deleteuser/:id', User.delete);

//rutas para ejecutar los metodos de usuario(controller)
route.post('/addvista', Vistas.save);
route.get('/getVistas/:idUsu', Vistas.getVistas);
route.get('/getoneVista/:idUsu/:idPeli', Vistas.getoneVista);
route.get('/getVistaRandom/:idUsu', Vistas.getvistaRandom);
route.get('/getVistaCate/:idUsu/:cate', Vistas.getvistaRandomCate);
route.delete('/deletevista', Vistas.delete);

route.get('/getprueba', Vistas.getprueba);

module.exports = route;


