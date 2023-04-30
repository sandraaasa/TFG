import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css'

import logo from './assets/images/tsclogo.png';
import { NavLink } from 'react-router-dom';


function HeaderInicio(){
  return (
    <nav classname="navbar navbar-expand-lg">
      <div className='container'>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt='logo' className='App-logo'/>
        </NavLink>
        <ul className='navbar-nav'>
          <li>
            <NavLink to={categoria}>Categorias</NavLink>
          </li>
          <li>
            <NavLink to={login}>Iniciar Sesion</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderInicio;