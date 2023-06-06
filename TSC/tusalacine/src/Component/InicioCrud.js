import React from 'react';
import '../assets/css/inicio.css';
import { Button } from 'primereact/button';


const InicioCRUD = () => {
    //const url = Global.url;

    return (
        <div alt="logo" className="inicioCRUD">
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
        </div>
    )
}
export default InicioCRUD;