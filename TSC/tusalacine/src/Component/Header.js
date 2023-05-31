import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/header.css";
import logo2 from "../assets/images/tsclogoinvert.png";
import { NavLink } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import UserContext from "../Context/UserContext";

const HeaderInicio = () => {
  const [checked, setChecked] = useState(true);
  let rol = localStorage.getItem("rol");
  console.log(rol);
  const { user, logout } = useContext(UserContext);

  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="card menu onlyback">
      {/*  flex-column md:flex-row */}
      <NavLink to="/" className="deco logoH">
        <img alt="logo" src={logo2} height="70" className="mr-2" />
      </NavLink>
      <ul className="lista">
        <li className="dark_mode">
          <InputSwitch
            aria-labelledby="dark_mode"
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
          <span id="dark_mode">Tema oscuro </span>
        </li>

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
                <span>Logout</span>
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
      </ul>
    </nav>
  );
};

export default HeaderInicio;
