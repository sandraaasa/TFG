import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/footer.css'
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div id="footer" className=' rounded'>
      <footer className='rounded'>
        <p>Todos los derechos reservados &copy; 2023</p>
        <ul>
          <li>
            <Link to="/" className='linea deco'>
              <span> Inicio </span>
            </Link>
          </li>
          <li>
            <Link to="/empresa" className='linea deco'>
              <span> Acerca de </span>
            </Link>
          </li>
          <li>
            <Link to="/empresa" className='linea deco'>
              <span> Contacto </span>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;