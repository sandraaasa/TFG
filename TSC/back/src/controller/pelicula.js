'use strict'

let Peli = require('../model/pelicula');

let controller = {
    //Metodo añadir
    save: (req, res) => {
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
    getPelis: async (req, res) => {
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

    //Metodo sacar peli
    getRandom: async (req, res) => {
        try {
                myobj = [];
                fetch("./datos.json")
                    .then(respuesta => respuesta.json())
                    .then(json => cargarJSON(json))
                    .catch(e => alert(e));

            function cargarJSON(json) {
                myobj = json;
                
                if (!myobj) {
                    return res.status(404).send({
                        message: 'No hay películas actualmente'
                    });
                } else {
                    return res.status(200).send({
                        myobj
                    });
                };
            }


            /* const apiKey = '652e4fba8ba82b23170e2069858853c1';
            const url = `https://api.themoviedb.org/3/list/1?api_key=${apiKey}&language=es`;
            const response = await axios.get(url); 
            const pelis = response.data.items;*/
            
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las peliculas'
            });
        }
    },

    //Metodo por id
    getPelisId: async (req, res) => {
        try {
            const pelid = req.params.id;
            const peliget = await Peli.findById({ _id: pelid });
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
    delete: async (req, res) => {
        try {
            const pelid = req.params.id;
            const pelidelt = await Peli.findOneAndDelete({ _id: pelid });

            if (!pelidelt) {
                return res.status(404).send({
                    message: 'No se ha encontrado la película'
                });
            } else {
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