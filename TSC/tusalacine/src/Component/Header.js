import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/header.css";
import logo2 from "../assets/images/tsclogoinvert.png";
import { NavLink } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import UserContext from "../Context/UserContext";
import { Button } from 'primereact/button';

const HeaderInicio = () => {
  const [checked, setChecked] = useState(true);
  let rol = localStorage.getItem("rol");
  console.log(rol);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="card menu">
      <NavLink to="/" className="deco logoH">
        <img alt="logo" src={logo2} height="70" className="mr-2" />
      </NavLink>
      <ul className="lista">
        <li className="dark_mode">
          <span id="dark_mode">Tema oscuro </span>
          <InputSwitch
            aria-labelledby="dark_mode"
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
        </li>
        <li>
          <NavLink to="/Catalogo" className="deco linea">
            Catálogo
          </NavLink>
        </li>
        {
          user &&
          <li className="m-2 flex">
            <NavLink to="/Admin" className="deco linea flex flex-column  align-content-center justify-content-center">

              <Button icon="pi pi-user" text severity="warning" aria-label={user.nombre} />
              <span>{user.nombre}</span>
            </NavLink>
          </li>
        }
        {user ? (
          <li className="m-2 flex">
            <NavLink to="/Sesion" className="deco linea" onClick={logout}>
              Cerrar Sesion
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/Sesion" className="deco linea">
              Iniciar Sesion
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HeaderInicio;
