import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css'

import logo from '../assets/images/tsclogo.png';
import logo2 from '../assets/images/tsclogoinvert.png';
import { NavLink } from 'react-router-dom';


const HeaderInicio = () =>{
  return (
    <nav className='card menu'>
        <NavLink to="/" className="deco">
        <img alt="logo" src={logo2} height="70" className="mr-2"/>
        </NavLink>
        <ul className='lista'>
          <li>
            <NavLink to="/Catalogo" className="deco">Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/Sesion" className="deco">Iniciar Sesion</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default HeaderInicio;