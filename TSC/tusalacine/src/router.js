import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* import Header from './Component/HeaderPrincipal'; */
import Header from "./Component/HeaderInicio";
import Inicio from './Component/Inicio';
import Carta from './Component/Carta';
import Footer from './Component/Footer';

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