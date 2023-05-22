import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css';
import logo2 from '../assets/images/tsclogoinvert.png';
import { NavLink } from 'react-router-dom';
import { InputSwitch } from "primereact/inputswitch";
import useUser from "../Hook/UseUsuario";


const HeaderInicio = () =>{
  const [checked, setChecked] = useState(true);
  const user = useUser();
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
          <li>
            <NavLink to="/Sesion" className="deco linea">Iniciar Sesion</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default HeaderInicio;