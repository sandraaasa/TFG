import {createContext} from "react";

const UsuarioContext = createContext({
    correo: null,
    nombre: null,
    rol: null
});

export default UsuarioContext;