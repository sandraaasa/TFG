import React from 'react';
import {BrowserRouter,Router,  Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Inicio from './Component/Home';
import Footer from './Component/Footer';
import './assets/css/router.css';
import Peliculas from './Component/Peliculas';

const Rutas = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <div className='mainRouter'> 
                <Routes>
                    <Route exact path='/' element={<Inicio/>}/>
                    <Route exact path="/Catalogo" element={<Peliculas />} />
                    {//<Route exact path="/Sesion" element={<Carta />} />
                    }
                </Routes>
            </div>
        <Footer/>
        </BrowserRouter>
    );

}
export default Rutas;