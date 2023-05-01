import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Global from '../Global';
/* import axios from 'axios';
import { Navigate } from 'react-router-dom'; */


const CartaPeli =({id, peliData}) =>{
    const url = Global.url;

    const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal} = peliData;
    const formatDate = (fecha) =>{
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const date = "Fecha = " + formatDate(fecha);

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Info" icon="pi pi-info-circle"  style={{ backgroundColor: '#708090', borderColor: 'white'}}/>
            <Button icon="pi pi-heart-fill" className="p-button-outlined p-button-secondary" />
        </div>
    );


    return (
            <Card title={titulo} subTitle={date} footer={footer} header={header} className="md:w-25rem">
                
                <p className="m-0">
                    {sinopsis}
                </p>
                
            </Card>
    )
}
export default CartaPeli;
        