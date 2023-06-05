"use strict";
let Peli = require("../model/pelicula");
let Vista = require("../model/vistas");

let controller = {
  //Metodo añadir
  save: async (req, res) => {
    const params = req.body;
    const vistaNew = new Vista();
    //Rellenamos
    vistaNew.idUsu = params.idUsu;
    vistaNew.idPeli = params.idPeli;
    vistaNew.dia = params.dia;

    //guardamos
    vistaNew
      .save()
      .then((vistaNew) => {
        return res.status(200).send({
          vistaNew,
        });
      })
      .catch((error) => {
        console.log(
          "Ocurrió un error al guardar las películas vistas del usuario:",
          error
        );
        return res.status(500).send(error);
      });
  },

  /* //Método get todas las pelis no vistas
    getNoVistas: async (req, res) => {
        try {
            const params = req.body;
            
            
            const pelisget = await Peli.where({categorias: categoria}).find({});
            if (!pelisget ) {
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
    }, */

  //Método get todas las pelis vistas
  getVistas: async (req, res) => {
    try {
      const idUsu = req.params.idUsu;
      const pelisUsu = await Vista.where({ idUsu: idUsu }).find({});

      if (!pelisget) {
        return res.status(404).send({
          message: "No hay películas vistas",
        });
      } else {
        const pelisget = [];
        for (let i = 0; i < pelisUsu.length; i++) {
          const añadir = await Peli.where({ _id: pelisUsu[i].idPeli }).find();
          console.log(añadir);
          pelisget.push(añadir);
        }
        return res.status(200).send({
          pelisUsu,
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "Ha habido un error y no se han encontrado las películas",
      });
    }
  },

  //Metodo Eliminar
  delete: async (req, res) => {
    try {
      const vistaid = req.params.id;
      const vistadelt = await Vista.findOneAndDelete({ _id: vistaid });

      if (!vistadelt) {
        return res.status(404).send({
          message:
            "No se ha encontrado las películas vistas del usuario" + vistaid,
        });
      } else {
        return res.status(200).send({
          vista: vistadelt,
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "Ha habido un error y no se ha podido eliminar",
      });
    }
  },
};
module.exports = controller;
