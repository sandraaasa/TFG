import React, { useEffect, useState } from 'react';
import '../assets/css/inicio.css';
import logo from '../assets/images/TSCHome.png';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import AleatorioSinCate from "./AleatorioSinCate";


const Inicio = () => {
    const [random, setpeli] = useState([]);
    const url = Global.url;
    const [visible, setVisible] = useState(false);
    const [err, seterr] = useState("");


    function getPeli() {
        axios.get(url + 'getone/').then(res => {
            setpeli(res.data.PeliRandom);
            
            setVisible(true);
        })
        .catch(error =>{
            seterr("No hay películas disponibles");
        })
    }
    return (
        <div alt="logo" className="inicio">
            <Dialog header="TSC" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>
                {
                    err == "" ?
                        <AleatorioSinCate
                            peliData={random}
                        />
                    :
                        <div>{err}</div>
                } 
            </Dialog>
            <Button icon="pi pi-external-link" onClick={() =>  getPeli()} label="Película Random" text raised severity="warning" className=' text-3xl md:text-5xl lg:text-7xl'  />
            <div className='animacionDiv'>
                
                <img src={logo} className='logoI w-full' alt='logo' /> 
            </div>
        </div>
    )
}
export default Inicio;