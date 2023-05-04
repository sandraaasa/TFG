import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
/* import Header from './Component/HeaderPrincipal'; */
import Header from './Component/Header';
import Inicio from './Component/Home';
import Footer from './Component/Footer';
import './assets/css/router.css';
import Peliculas from './Component/Peliculas';
import AsideLateral from './Component/AsideLateral';
import HeaderInicio from './Component/Header';

const Rutas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'>
                    {
                        true? <HeaderInicio/> : <Header/>
                    }
                    {/* <Inicio/> */}
                </Route>
                <Route exact path='/Catalogo'>
                    {/* <Header/> */}
                    {
                        true ? <Peliculas /> : <Inicio />
                    }
                    
                </Route>
                <Route exact path='/'>
                    <Footer />
                </Route>
                <Route>
                    <div>Página no encontrada</div>
                </Route>
            </Routes>
        </BrowserRouter>
    );

}
export default Rutas;