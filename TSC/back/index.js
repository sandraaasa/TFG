'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const mongose = require('mongoose');
const app = express();

mongose.Promise = global.Promise;
var rutas = require('./src/routes/peliculas');

//cargamos el middleware para analizar cuerpos de la url
//
app.use(bodyparser.urlencoded({extended: true}));
//todas las peticiones las convertimos a json
app.use(bodyparser.json());

//activamos CORS (permitir peticiones AJAX y HTTP desde el frontend)
//para permitir los get post etc
app.use((req, res, next) =>{
    //establecemos cabeceras con respuesta
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})


//cargamos los archivos de ruta
app.use('/', rutas);

//nos conectamos a mongo y ejecutamos
mongose.connect('mongodb+srv://usuario:usuario@sandra.42non41.mongodb.net/tsc',{useNewUrlParser: true,autoIndex: true}).then(() =>{
        console.log('CONECTADO!');
        app.listen(3001, ()=>{
            console.log('Server en marcha en http://localhost:3001')
        })
    })
