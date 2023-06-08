import React, { useState, useContext, useRef } from 'react';
import UserContext from "../Context/UserContext";
import Global from '../Global';
import axios from 'axios';
import AleatorioSinCate from "./AleatorioSinCate";
import '../assets/css/inicio.css';
import logo from '../assets/images/TSCHome.png';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from "primereact/toast";


const Inicio = () => {
    const [random, setpeli] = useState([]);
    const url = Global.url;
    const [visible, setVisible] = useState(false);
    const [err, seterr] = useState("");
    const { user } = useContext(UserContext);
    const toast = useRef(null);
    
    const show = (dato) => {
        toast.current.show({
        severity: "error",
        summary: "No hay películas",
        detail: dato,
        life: 5000
        });
    };

    function getPeli() {
        user ?
            //si el usuario está logueado
            axios.get(url + "getVistaRandom/" + user.id).then((res) => {
                setpeli(res.data.PeliRandom)
                setVisible(true);
            })
            .catch((error) =>{
                if(error.response.status == 404){
                    show("Te has zampado todas las películas glotón `^´")
                }
                console.log(error.response.status)
            })
        :
            //si el usuario no está logueado
            axios.get(url + 'getone/').then(res => {
                setpeli(res.data.PeliRandom);
                setVisible(true);
            })
            .catch((error) =>{
                if(error.response.status == 404){
                    show("No existe ninguna película")
                }
                console.log(error.response.status)
            })
    }
    return (
        <div alt="logo" className="inicio">
            <Toast ref={toast} />
            <Dialog header="TSC" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>
                {
                    err === "" ?
                        <AleatorioSinCate
                            peliData={random}
                        />
                    :
                        <div>{err}</div>
                } 
            </Dialog>
            <Button icon="pi pi-external-link" onClick={() =>  getPeli()} label="Random Movie" raised severity="warning" className=' text-3xl md:text-5xl lg:text-7xl'  />
            <div className='animacionDiv'>
                
                <img src={logo} className='logoI w-full' alt='logo' /> 
            </div>
        </div>
    )
}
export default Inicio;