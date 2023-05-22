import React, { useEffect, useState } from 'react';
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogoinvert.png';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import AleatorioSinCate from "./AleatorioSinCate";
import { classNames } from 'primereact/utils';


const Inicio = () => {
    const [random, setpeli] = useState([]);
    const url = Global.url;
    const [visible, setVisible] = useState(false);


    function getPeli() {
        axios.get(url + 'getone/').then(res => {
            setpeli(res.data.PeliRandom);
        })
        setVisible(true)
    }
    return (
        <div alt="logo" className="inicio">
            <Dialog header="TSC" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>
                <AleatorioSinCate
                    peliData={random}
                /> 
            </Dialog>
            <Button icon="pi pi-external-link" onClick={() =>  getPeli()} label="Película Random" text raised severity="warning" className=' text-base md:text-3xl lg:text-7xl'  />
            <div className='animacionDiv'>
                <img src={logo} className='logoI' alt='logo' />
                <img src={logo} className='logoI ani1' alt='logo' />
            </div>
        </div>
    )
}
export default Inicio;