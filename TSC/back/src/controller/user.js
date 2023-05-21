'use strict'

let User = require('../model/usuario');

let controller = {
    //Metodo añadir
    saveuser: (req, res) => {
        const params = req.body;
        const userNew = new User();
        //Rellenamos
        userNew.nombre = params.nombre;
        userNew.correo = params.correo;
        userNew.password = params.password;
        userNew.cunple = params.cunple;
        //guardamos

        userNew.save()
            .then((userStored) => {
                return res.status(200).send({
                    userStored
                });
            })
            .catch((error) => {
                console.log('Ocurrió un error al guardar el usuario:', error);
            });

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