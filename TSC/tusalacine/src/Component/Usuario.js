import React, { useState, useContext } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import UserContext from "../Context/UserContext";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const PerfilUsuario = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useContext(UserContext);

  return (
    <div className="container m-4 w-full">
      <TabView >
        <TabPanel header={user.nombre} leftIcon="pi pi-user mr-2" >
          <p className="m-4 container w-full">
            <span className="p-float-label">
              <InputText required id="username" name='username' type="text" value={user.nombre} className='w-full' />
              <label htmlFor="username">Usuario</label>
            </span><br />
            <span className="p-float-label">
              <InputText required id="email" name='email' type="text" value={user.correo} className='w-full' />
              <label htmlFor="emailReg">Correo electrónico</label>
            </span><br />
            <span className="p-float-label">
              <Calendar required id="date" name='date' className='w-full' />
              <label htmlFor="dateReg">Fecha de cumpleaños</label>
            </span><br />
          </p>
        </TabPanel>
        <TabPanel rightIcon="pi pi-calendar ml-2">
          <p className="m-0 container">
              
          </p>
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
