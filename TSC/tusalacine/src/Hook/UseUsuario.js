import { useContext } from "react";
import UsuContext from "../context/UsuarioContext";

const UseUsuario = () => {
    const contextUser = useContext(UsuContext);

    const setContextUser = (newValue) => {
        contextUser.updateContext(newValue);
    };

    return { contextUser, setContextUser };
};


export default  UseUsuario;