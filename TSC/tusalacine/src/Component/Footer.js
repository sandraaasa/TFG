import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/footer.css'

import logo from '../assets/images/tsclogoinvert.png';
import { NavLink } from 'react-router-dom';


const Footer = () =>{
  return (
    <footer class="container">
      <p>Todos los derechos reservados &copy; 2023</p>
      <img alt="logo" src={logo} height="40" className="mr-2"></img>
      <ul>
        <li><a href="#"> Inicio </a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </footer>
  );
}

export default Footer;