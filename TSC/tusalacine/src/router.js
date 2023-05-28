import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { ScrollTop } from 'primereact/scrolltop';
import InicioCRUD from './Component/InicioCrud';


const Rutas = () => {


    return (
        <BrowserRouter>
            <Header />
            <div className='mainRouter'>
                <Routes>
                    <Route exact path='/' element={<Inicio />} />
                    <Route exact path="/Catalogo" element={<Peliculas />} />
                    <Route exact path="/Sesion" element={<LogRegistro />} />
                    <Route exact path="/empresa" element={<TSCAyuda />} />
                    <Route exact path='/admin' element={<InicioCRUD />} />
                </Routes>
            </div>
            <Footer />
            <ScrollTop className='mb-8' />
        </BrowserRouter>
    );

}
export default Rutas;