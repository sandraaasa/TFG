'use strict'

let User = require('../model/usuario');

let controller = {
    //Metodo añadir
    saveuser: (req, res) => {
        const params = req.body;
        const userNew = new User();
        //Rellenamos
        userNew.nombre = params.nombre;
        userNew.rol = params.rol;
        userNew.correo = params.correo;
        userNew.password = params.password;
        userNew.cunple = params.cunple;
        //guardamos

        userNew.save()
            .then((user) => {
                return res.status(200).send({
                    user
                });
            })
            .catch((error) => {
                console.log('Ocurrió un error al guardar el usuario:', error);
            });

    },
    //Metodo Listar todos los usuarios
    getUser: async (req, res) => {
        try {
            const userget = await User.find({});
            if (!userget) {
                return res.status(404).send({
                    message: 'No hay usuarios actualmente'
                });
            } else {
                return res.status(200).send({
                    userget
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se han encontrado las usuarios'
            });
        }
    },
    //Metodo buscar por id
    getOneUser: async (req, res) => {
        try {
            const userid = req.params.id;
            const userget = await User.findById({ _id: userid });
            if (!userget) {
                return res.status(404).send({
                    message: 'No hay usuarios con ese id'
                });
            } else {
                return res.status(200).send({
                    userget
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se ha encontrado el usuario'
            });
        }
    },
    //Metodo buscar por id
    getUserEmail: async (req, res) => {
        try {
            const usercorreo = req.params.correo;
            const userget = await User.where({correo: usercorreo}).find();
            if (!userget) {
                return res.status(404).send({
                    message: 'No hay usuarios con ese id'
                });
            } else {
                return res.status(200).send({
                    userget
                });
            };
        } catch (error) {
            return res.status(500).send({
                message: 'Ha habido un error y no se ha encontrado el usuario'
            });
        }
    },
    //Metodo Eliminar
    delete: async (req, res) => {
        try {
            const userid = req.params.id;
            const userdelt = await User.findOneAndDelete({ _id: userid });

            if (!userdelt) {
                return res.status(404).send({
                    message: 'No se ha encontrado el usuario'
                });
            } else {
                return res.status(200).send({
                    user: userdelt
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