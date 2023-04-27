'use strict'

let Peli = require('../model/pelicula');
let controller ={
    //Metodo añadir
    add: (req, res)=>{
        let params = req.body;
        const peliNew = new Peli();
        //Rellenamos
        peliNew.titulo = params.titulo;
        peliNew.studio = params.categorias;
        peliNew.minutos = params.minutos;
        peliNew.pais = params.pais;
        peliNew.sinopsis = params.sinopsis;
        peliNew.valoracionTotal = params.valoracionTotal;
        //guardamos
        peliNew.save((err, peliStored) =>{
                if (err || !peliStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha podido guardar la película'
                    });
                }else{
                    return res.status(200).send({
                        status: 'success',
                        peliStored
                    });
                }
            });
    },

    //Metodo Listar
    getPelis: (req, res)=>{
        let query = Peli.find({});
        
        query.err((err, peliculas) =>{

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No se ha podido extraer las peliculas'
                });
            }else {
                if (!peliculas) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay películas actualmente'
                    });
                }else{
                    return res.status(200).send({
                        status: 'success',
                        peliculas
                    });
                }
            }

        });
    },

    //Metodo Eliminar
    delete: (req, res)=>{
        let pelid = req.params.id;
        
        Peli.findOneAndDelete({_id: pelid}, (err, pelidelt) =>{

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'No se ha podido eliminar'
                });
            }
            if (!pelidelt) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado la película'
                });
            }else{
                return res.status(200).send({
                    status: 'success',
                    pelicula: pelidelt
                });
            }

        });
    }

}
module.exports = controller;