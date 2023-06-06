import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/header.css";
import logo2 from "../assets/images/tsclogoinvert.png";
import { NavLink } from "react-router-dom";
import { Button } from 'primereact/button';
import UserContext from "../Context/UserContext";
import { Button } from 'primereact/button';

const HeaderInicio = () => {
  const [checked, setChecked] = useState(true);
  const { user, logout } = useContext(UserContext);

  const dark = () => {
    setChecked(!checked);
    console.log(checked);
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="card menu onlyback">
      
      <NavLink to="/" className="deco logoH">
        <img alt="logo" src={logo2} height="70" className="mr-2" />
      </NavLink>
      <ul className="lista">

        <li className="flex">
          <NavLink
            to="/Catalogo"
            className="deco linea flex flex-column align-content-center justify-content-center"
          >
            <span className="flex align-content-center justify-content-center">
              {path == "/Catalogo" ? (
                <i
                  className="pi pi-folder-open"
                  style={{ fontSize: "1.5rem" }}
                />
              ) : (
                <i className="pi pi-folder" style={{ fontSize: "1.5rem" }} />
              )}
            </span>
            <span>Catálogo</span>
          </NavLink>
        </li>
        {user ? (
          path == "/perfil" ? (
            <li className="ml-2 flex">
              <NavLink
                to="/Sesion"
                className="deco linea  flex flex-column  align-content-center justify-content-center"
                onClick={logout}
              >
                <span className="flex align-content-center justify-content-center">
                  <i
                    className="pi pi-sign-out"
                    style={{ fontSize: "1.5rem" }}
                  />
                </span>
                <span>Salir</span>
              </NavLink>
            </li>
          ) : (
            <li className="ml-2 flex">
              <NavLink
                to="/perfil"
                className="deco linea  flex flex-column  align-content-center justify-content-center"
              >
                <span className="flex align-content-center justify-content-center">
                  <i className="pi pi-user" style={{ fontSize: "1.5rem" }} />
                </span>
                <span>{user.nombre}</span>
              </NavLink>
            </li>
          )
        ) : (
          path != "/Sesion" && (
            <li>
              <NavLink to="/Sesion" className="ml-2 deco linea">
                <span className="flex align-content-center justify-content-center">
                  <i className="pi pi-sign-in" style={{ fontSize: "1.5rem" }} />
                </span>
                <span>Login</span>
              </NavLink>
            </li>
          )
        )}
        {
          checked == true ?
            <li className="ml-2 flex dark-mode">
                <Button rounded raised text className="flex align-content-center justify-content-center" severity="secondary" aria-label="modo-oscuro" onClick={dark}>
                  <i className="pi pi-moon" style={{ fontSize: "2.5rem" }} />
                </Button>
            </li>
          :
            <li className="ml-2 flex dark-mode">
                <Button rounded raised text className="flex align-content-center justify-content-center" aria-label="modo-claro" onClick={dark}>
                  <i className="pi pi-sun" style={{ fontSize: "2.5rem" }} />
                </Button>
            </li>
        }
      </ul>
    </nav>
  );
};

export default HeaderInicio;
