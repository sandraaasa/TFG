import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import Global from "../Global";
import axios from "axios";
import Carta from "./Carta";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const PerfilUsuario = () => {
  const url = Global.url;
  const [pelis, setpelis] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getpelis();
  }, [pelis.length]);

  //obtner todas las películasen en el usestate pelis
  const getpelis = () => {
      axios.get(url + "getPelis/" ).then((res) => {
        setpelis(res.data.peliget);
      });
  };  
  

  return (
    <div className="container m-4 w-auto">
      <TabView >
        <TabPanel header={user.nombre} leftIcon="pi pi-user mr-2" >
          <form className="m-4 container perfilContainer">
            <span className="perfil">
              <div >Usuario</div>
              <InputText disabled value={user.nombre} />
            </span><br />
            <span className="perfil">
              <div >Correo electrónico</div>
              <InputText disabled value={user.correo} />
            </span><br />
            <span className="perfil" >
              <div >Permisos</div>
              <InputText disabled value={user.rol} />
            </span><br />
          </form>
        </TabPanel>
        <TabPanel rightIcon="pi pi-calendar ml-2">
          <div className="m-0 container">
            <h2>Películas que hé visto</h2>
            <section className="flex flex-wrap justify-content-center card-container gap-3">
              {pelis.length > 0 ? (
                pelis.map((peli, i) => {
                  return <Carta key={i + 1} id={i} peliData={peli} />;
                })
              ) : (
                <h3 className="mx-auto">No hay Peliculas que mostrar</h3>
              )}
            </section>
          </div>
        </TabPanel>
        <TabPanel leftIcon="pi pi-search mr-2">
          <p className="m-0 container">

          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default PerfilUsuario;
