import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* import Header from './Component/HeaderPrincipal'; */
import Header from './Component/Header';
import Inicio from './Component/Home';
import Footer from './Component/Footer';
import './assets/css/router.css';
import Peliculas from './Component/Peliculas';
import AsideLateral from './Component/AsideLateral';

const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
        {/* <Routes>
            <Route exact path='/Catalogo' element={<Header/>} />
        </Routes> */}
        <div className='mainRouter'> 
            <aside>
                <AsideLateral/>
            </aside>
            <section>
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                    <Route exact path="/Catalogo" element={<Peliculas />} />
                    {//<Route exact path="/Sesion" element={<Carta />} />
                    }
                </Routes>
            </section>
        </div>
        <Footer/>
        </BrowserRouter>
    );

}
export default Router;