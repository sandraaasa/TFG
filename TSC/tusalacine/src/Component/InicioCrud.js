import React, { useEffect, useState } from 'react';
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogoinvert.png';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';


const InicioCRUD = () => {
    const url = Global.url;

    return (
        <div alt="logo" className="inicioCRUD">
            <Button></Button>
        </div>
    )
}
export default InicioCRUD;