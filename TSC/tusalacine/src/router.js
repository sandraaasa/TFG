import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* import Header from './Component/HeaderPrincipal'; */
import Header from './Component/Header';
import Inicio from './Component/Home';
import Carta from './Component/Carta';
import Footer from './Component/Footer';
import './assets/css/router.css';

const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
        {/* <Routes>
            <Route exact path='/Catalogo' element={<Header/>} />
        </Routes> */}
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/Catalogo" element={<Carta />} />
                <Route exact path="/Sesion" element={<Carta />} />
                
            </Routes>
        <Footer/>
        </BrowserRouter>
    );

}
export default Router;