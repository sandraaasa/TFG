'use strict'

let Peli = require('../model/pelicula');

let controller = {
    //Metodo añadir una peli
    saveone: (req, res) => {
        const params = req.body;
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
        peliNew.poster = params.poster;
        //guardamos

        peliNew.save()
            .then((peliStored) => {
                return res.status(200).send({
                    peliStored
                });
            })
            .catch((error) => {
                console.log('Ocurrió un error al guardar la película:', error);
            });

    },

    //Metodo añadir muchas pelis
    save: async (req, res) => {
        try {
            const params = req.body;
            Peli.insertMany(params);
                
                if (!params) {
                    return res.status(404).send({
                        message: 'No hay películas actualmente'
                    });
                } else {
                    return res.status(200).send({
                        params
                    });
                };

        } catch (error) {
            
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las películas'
            });
        }
    },

    //Método Listar todas las pelis
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
                message: 'Ha habido un error y no se han encontrado las películas'
            });
        }
    },

    //Metodo get peli random
    getRandom: async (req, res) => {
        try {
            //sacamos una categoria aleatoria
            const categoria = ["Acción", "Aventura", "Animación", "Comedia", "Crimen", "Documental", "Drama", "Familia", "Fantasía", "Historia", "Terror", "Música", "Misteria", "Romance", "Ciencia ficción", "Pelicula de TV", "Suspense", "Bélica", "Western"];
            const cateRandom =  categoria[Math.floor(Math.random() * categoria.length)];
            //obtenemos la pelicula random
            const peliculas = await Peli.where({categorias: cateRandom}).find();
            const PeliRandom = peliculas[Math.floor(Math.random() * peliculas.length)];
            
            if (!peliculas) {
                return res.status(404).send({
                    message: 'No hay películas con ese id'
                });
            } else {
                return res.status(200).send({
                    PeliRandom
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las películas'
            });
        }
    }, 

    //Metodo get una categoría
    getRandomCate: async (req, res) => {
        try {
            const categoria = req.params.cate;
            const peliculas = await Peli.where({categorias: categoria}).find();
            const PeliRandom = peliculas[Math.floor(Math.random() * peliculas.length)];
            
            if (!peliculas) {
                return res.status(404).send({
                    message: 'No hay películas con ese id'
                });
            } else {
                return res.status(200).send({
                    PeliRandom
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las películas'
            });
        }
    },

    //Método get todas categorías
    getCate: async (req, res) => {
        try {
            const categoria = req.params.cate;
            const pelisCate = await Peli.where({categorias: categoria}).find({});
            if (!pelisCate) {
                return res.status(404).send({
                    message: 'No hay películas con esa categoría'
                });
            } else {
                return res.status(200).send({
                    pelisCate
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las películas'
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