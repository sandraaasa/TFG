import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Inicio from './Component/Home';
import Footer from './Component/Footer';
import './assets/css/router.css';
import Peliculas from './Component/Peliculas';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { useUserContext, useUserToggleContext } from "./UserProvider";
import { ScrollTop } from 'primereact/scrolltop';


const Rutas = () => {

    const user = useUserContext();
    const cambiarLogin = useUserToggleContext();
    const CateData = {
        id: null,
        categoria: "pepo"
    }

    return (
        <BrowserRouter>
        
            {/* <h3>Componente hikjo</h3>
            {user && <p> Hola {user.name}</p>}
            <button onClick={cambiarLogin}> CAmbia Login</button> */}

            <Header />
            <div className='mainRouter'>
                <Routes>
                    <Route exact path='/' element={<Inicio />} />
                    <Route exact path="/Catalogo" element={<Peliculas />} />
                    <Route exact path="/Sesion" element={<Registro/>} />
                    
                </Routes>
            </div>
            <Footer />
            <ScrollTop className='mb-8'/>
        </BrowserRouter>
    );

}
export default Rutas;