import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css';
import logo2 from '../assets/images/tsclogoinvert.png';
import { NavLink } from 'react-router-dom';
import { InputSwitch } from "primereact/inputswitch";


const HeaderInicio = () =>{
  const [checked, setChecked] = useState(true);
  let rol = localStorage.getItem("rol");
  
  console.log(rol);

  return (
    <nav className='card menu'>
        <NavLink to="/" className="deco logoH">
          <img alt="logo" src={logo2} height="70" className="mr-2"/>
        </NavLink>
        <ul className='lista'>
          <li className='dark_mode'>
            <span id="dark_mode">Tema oscuro </span>
            <InputSwitch aria-labelledby="dark_mode" checked={checked} onChange={(e) => setChecked(e.value)} />
          </li>
          <li>
            <NavLink to="/Catalogo"  className="deco linea">Catálogo</NavLink>
          </li>
          {
            rol == "admin" &&
            <li>
              <NavLink to="/Admin"  className="deco linea">Admin</NavLink>
            </li> 
          }
          
            
              {
                rol == "admin" ? 
                  <li>
                    <div
                      className="deco linea" 
                    >
                      Cerrar Sesion
                    </div>
                  </li>
                :
                  <li>
                    <NavLink to="/Sesion" className="deco linea">Iniciar Sesion</NavLink>
                  </li>
              }
            
          
        </ul>
    </nav>
  );
}

export default HeaderInicio;