import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import "primereact/resources/themes/arya-orange/theme.css"; // theme
import Header from "./Component/Header";
import Inicio from "./Component/Home";
import Footer from "./Component/Footer";
import Peliculas from "./Component/Peliculas";
import TSCAyuda from "./Component/TSCAyuda";
import LogRegistro from "./Component/RegisLog";
import Usuario from "./Component/Usuario";
import { UserProvider } from "./Context/UserContext";
import "./assets/css/router.css";
import { ScrollTop } from "primereact/scrolltop";
import ThemContext from "./Context/ThemContext";
import sagaBlue from './theme-saga-blue';

const Rutas = () => {
  
  const { theme } = useContext(ThemContext);
  return (
    <BrowserRouter>
      {/* <Head>
          <link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css">
      </Head> */}
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Catalogo" element={<Peliculas />} />
          <Route exact path="/Sesion" element={<LogRegistro />} />
          <Route exact path="/empresa" element={<TSCAyuda />} />
          <Route exact path="/perfil" element={<Usuario />} />
        </Routes>
      </UserProvider>
      <Footer />

      <ScrollTop className="mb-8" />
    </BrowserRouter>
  );
};
export default Rutas;
