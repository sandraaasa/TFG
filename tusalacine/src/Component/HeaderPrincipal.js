import React from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import '../css/header.css'
import { Button } from 'primereact/button';
import MenuPopUp from './MenuPopUp';



function HeaderPrincipal(){
  return (
    <nav classname="header">
      
      <div classname="logo">
        <MenuPopUp/>
        <Button icon="pi pi-user" severity="info" aria-label="User" />
      </div>
    </nav>
  );
}

export default HeaderPrincipal;
