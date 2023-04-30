'use strict'

let Peli = require('../model/pelicula');
let controller ={
    //Metodo añadir
    save: (req, res)=>{
        let params = req.body;
        const peliNew = new Peli();
        //Rellenamos
        peliNew.imdb_id = params.imdb_id;
        peliNew.titulo = params.titulo;
        peliNew.fecha = params.fecha;
        peliNew.categorias = params.categorias;
        peliNew.minutos = params.minutos;
        peliNew.pais = params.pais;
        peliNew.sinopsis = params.sinopsis;
        peliNew.valoracionTotal = params.valoracionTotal;
        //guardamos
        peliNew.save()
        .then((peliStored) => {
                return res.status(200).send({
                    peliStored
                });
          })
          .catch((error) => {
            console.log('Ocurrió un error al guardar el usuario:', error);
          });
        
    },

    //Metodo Listar
    getPelis: async (req, res)=>{
        try {
            const peliget = await Peli.find({});
            if (!peliget) {
                return res.status(404).send({
                    message: 'No hay películas actualmente'
                });
            } else {
                return res.status(200).send({
                    peliget
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las peliculas'
            });
        }
    },

    //Metodo  por id
    getPelisId: async (req, res)=>{
        try {
            const pelid = req.params.id;
            const peliget = await Peli.findById({_id: pelid});
            if (!peliget) {
                return res.status(404).send({
                    message: 'No hay películas con ese id'
                });
            } else {
                return res.status(200).send({
                    peliget
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se ha encontrado la pelicula'
            });
        }
    },

    //Metodo Eliminar
    delete: async (req, res)=>{
        try {
            const pelid = req.params.id;
            const pelidelt = await Peli.findOneAndDelete({_id: pelid});

            if (!pelidelt) {
                return res.status(404).send({
                    message: 'No se ha encontrado la película'
                });
            }else{
                return res.status(200).send({
                    pelicula: pelidelt
                });
            }
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se ha podido eliminar'
              });
        }
    }

}
module.exports = controller;