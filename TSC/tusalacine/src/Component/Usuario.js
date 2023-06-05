import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import Global from "../Global";
import axios from "axios";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import CartaPeli from "./Carta";

const PerfilUsuario = () => {
  const url = Global.url;
  const [pelis, setpelis] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getpelis();
  }, [pelis.length]);

  //obtner todas las películasen en el usestate pelis
  const getpelis = () => {
      axios.get(url + "getVistas/" + user.id ).then((res) => {
        setpelis(res.data.pelisget);
      });
  };  
  

  return (
    <div className=" m-2 w-full">
      <TabView className="w-full">
        <TabPanel header={user.nombre} leftIcon="pi pi-user mr-2" >
          <form className="m-4 perfilContainer">
            <span>
              <div >Usuario</div>
              <InputText disabled value={user.nombre} />
            </span><br />
            <span>
              <div >Correo electrónico</div>
              <InputText disabled value={user.correo} />
            </span><br />
            <span>
              <div >Permisos</div>
              <InputText disabled value={user.rol} />
            </span><br />
          </form>
        </TabPanel>
        <TabPanel header="Vistas" leftIcon="pi pi-eye mr-2">
          <div className=" ">
            <h2>Películas que he visto</h2>
            <section className="flex flex-wrap justify-content-center">
              {pelis.length >= 0 ? (
                pelis.map((peli, i) => {
                  return <CartaPeli key={i + 1} peliData={peli} />;

                })
              ) : (
                <h3 className="mx-auto">No hay películas que mostrar</h3>
              )}
            </section>
          </div>
        </TabPanel>
        {/* <TabPanel leftIcon="pi pi-search mr-2">
          <p className="m-0 container">

          </p>
        </TabPanel> */}
      </TabView>
    </div>
  );
};

export default PerfilUsuario;
