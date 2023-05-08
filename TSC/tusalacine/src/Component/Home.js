import React, { useEffect, useState } from 'react';
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogoinvert.png';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';


const Inicio = () => {
    
    return (
        <div alt="logo" className="inicio">
            <div className='animacionDiv'>
                <img src={logo} className='logoI' alt='logo' />
                <img src={logo} className='logoI ani1' alt='logo' />
            </div>
            <Button label="Categorias" text raised severity="warning"/>
            
        </div>
    )

}
export default Inicio;