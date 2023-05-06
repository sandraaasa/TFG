import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/footer.css'

import logo from '../assets/images/tsclogoinvert.png';
import { Link, NavLink } from 'react-router-dom';


const Footer = () =>{
  return (
    <footer>
      <p>Todos los derechos reservados &copy; 2023</p>
      {/* <img alt="logo" src={logo} height="40" className="mr-2"></img> */}
      <ul>
        <li>
          <Link to="/" className='linea deco'>
            <span> Inicio </span>
          </Link>
        </li>
        <li>
          <Link to="/empresa"  className='linea deco'>
            <span> Acerca de </span>
          </Link>
        </li>
        <li>          
          <Link to="/empresa"  className='linea deco'>
            <span> Contacto </span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;