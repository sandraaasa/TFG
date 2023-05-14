import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


const Random = ({ peliData }) => {

    const { categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster } = peliData;
    const formatDate = (fecha) => {
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const img = "https://image.tmdb.org/t/p/w500" + poster;

    const header = (
        <header className='flex justify-content-evenly'>
            <img alt={imbd_id} src={img} className='w-5 m-2 rounded-4'/>
            <div className='flex flex-column align-content-center' >
                <h1>{titulo}</h1>
                <p>Fecha: {fecha} </p>
                <p> Minutos: {minutos}</p>
                <p>Estrellas: {valoracionTotal}</p>
                <p>Pais: {pais}</p>
            </div>
        </header>
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Info" icon="pi pi-info-circle border-round" />
            <Button icon="pi pi-heart-fill" style={{ color: 'red' }} className="p-button-outlined p-button-secondary" />
        </div>
    );


    return (
        <Card  footer={footer} header={header} className='border-round max-w-full m-2'>

            <p className="m-2">
                {sinopsis}
            </p>
            <ul>
                {
                    categorias.map((elemento) => {
                        return <li key={elemento}>{elemento}</li>
                    })
                }
            </ul>
        </Card>
    )
}
export default Random;
