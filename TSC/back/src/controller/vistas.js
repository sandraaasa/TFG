'use strict'

let Vista = require('../model/vistas');

let controller = {
    //Metodo añadir
    savevista: async (req, res) => {
        const params = req.body;
        const vistaNew = new Vista();
        //Rellenamos
        vistaNew.nombre = params.nombre;
        vistaNew.rol = params.rol;
        vistaNew.correo = params.correo;
        
        vistaNew.password = await bcrypt.hash(params.password, 10);
        vistaNew.cumple = params.cumple;
        //guardamos

        vistaNew.save()
            .then((vista) => {
                return res.status(200).send({
                    vistaNew
                });
            })
            .catch((error) => {
                console.log('Ocurrió un error al guardar las películas vistas del usuario:', error);
                return res.status(500).send(error);
            });

    },
    //Metodo Eliminar
    delete: async (req, res) => {
        try {
            const vistaid = req.params.id;
            const vistadelt = await Vista.findOneAndDelete({ _id: vistaid });

            if (!vistadelt) {
                return res.status(404).send({
                    message: 'No se ha encontrado las películas vistas del usuario'+ vistaid
                });
            } else {
                return res.status(200).send({
                    vista: vistadelt
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