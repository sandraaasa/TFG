'use strict'

var Peli = require('../model/pelicula');
var controller ={
    //Metodo Guardar
    save: (req, res)=>{
        var params = req.body;
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
                    })
                }else{
                    return res.status(200).send({
                        status: 'success',
                        peliStored
                    })
                }
            }
        )
    }

    //Metodo Listar
    
}