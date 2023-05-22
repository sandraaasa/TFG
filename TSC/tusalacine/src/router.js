import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Inicio from './Component/Home';
import Footer from './Component/Footer';
import './assets/css/router.css';
import Peliculas from './Component/Peliculas';
import TSCAyuda from './Component/TSCAyuda';
import LogRegistro from "./Component/RegisLog";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import UserContext from "./context/UsuarioContext";
import { useUserContext, useUserToggleContext } from "./UserProvider";
import { ScrollTop } from 'primereact/scrolltop';


const Rutas = () => {

    const user = localStorage.getItem(nombre);
    if (localStorage.getItem(rol) != "") {
        
    } else {
        
    }
    const rol = localStorage.getItem(rol);
    const UserData = {
        correo: null,
        nombre: user,
        rol: null
    }

    return (
        <BrowserRouter>
            <UserContext.Provider value={UserData}>
            <Header />
            <div className='mainRouter'>
                <Routes>
                    <Route exact path='/' element={<Inicio />} />
                    <Route exact path="/Catalogo" element={<Peliculas/>} />
                    <Route exact path="/Sesion" element={<LogRegistro/>} />
                    <Route exact path="/empresa" element={<TSCAyuda/>} />
                    
                </Routes>
            </div>
            <Footer />
            <ScrollTop className='mb-8'/>
            </UserContext.Provider>
        </BrowserRouter>
    );

}
export default Rutas;