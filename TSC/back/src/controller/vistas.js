"use strict";
let Peli = require("../model/pelicula");
let Vista = require("../model/vistas");
//const ObjectId = mongoose.Types.ObjectId;

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


  //Método get todas las pelis vistas
  getVistas: async (req, res) => {
    try {
      const idUsu = req.params.idUsu;
      const pelisUsu = await Vista.where({ idUsu: idUsu }).find();

      if (!pelisUsu) {
        return res.status(404).send({
          message: "No hay películas vistas",
        });
      } else {
        const pelisget = [];
        for (let i = 0; i < pelisUsu.length; i++) {
          const anadir = await Peli.findById({ _id: pelisUsu[i].idPeli });
          pelisget.push(anadir);
        }

        return res.status(200).send({
          pelisget,
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "Ha habido un error y no se han encontrado las películas",
      });
    }
  },


  //Método get una peli vista
  getoneVista: async (req, res) => {
    try {
      const idUsu = req.params.idUsu;
      const idPeli = req.params.idPeli;

      const pelisUsu = await Vista.findOne({ idPeli: idPeli, idUsu: idUsu });
      if (!pelisUsu) {
        return res.status(200).send({
          Visto: false,
        });
      } else {
        return res.status(200).send({
          Visto: true,
        });
      }
    } catch (error) {
      return res.status(500).send({
        message: "Ha habido un error y no se han encontrado las películas",
      });
    }
  },


  //Método eliminar una peli vista
  delete: async (req, res) => {
    try {
      const params = req.body;
      const { idUsu, idPeli } = params;
      const vistadelt = await Vista.findOneAndDelete({ idPeli, idUsu });
      if (!vistadelt) {
        return res.status(404).send({
          message: "No se ha encontrado la película vista del usuario " + idUsu,
        });
      } else {
        return res.status(200).send({
          vistadelt,
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
