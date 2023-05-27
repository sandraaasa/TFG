import { useContext } from "react";
import UsuContext from "../context/UsuarioContext";

const UseUsuario = () => {
    const { contextUser, updateContext } = useContext(UsuContext);

    const setContextUser = (newValue) => {
        updateContext(newValue);
    };

    return { contextUser, setContextUser };
};


export default  UseUsuario;