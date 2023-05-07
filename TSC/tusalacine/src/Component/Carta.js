import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Global from '../Global';
import { Accordion, AccordionTab } from 'primereact/accordion';


const CartaPeli =({id, peliData}) =>{

    const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal} = peliData;
    const formatDate = (fecha) =>{
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const subTitle = (
        <div id='subtitlePeli'>
        <p>Fecha: {formatDate(fecha)} </p>
        <p> Minutos: {minutos}</p>
        <p>Estrellas: {valoracionTotal}</p>
        <p>Pais: {pais}</p>
        </div>
    );

    const header = (
        <img alt={imbd_id} src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Info" icon="pi pi-info-circle"  style={{ backgroundColor: '#708090', borderColor: 'white'}}/>
            <Button icon="pi pi-heart-fill" style={{ color: 'red' }} className="p-button-outlined p-button-secondary" />
        </div>
    );


    return (
            <Card title={titulo} subTitle={subTitle} footer={footer} header={header} className="md:w-25rem">
                <Accordion >
                    <AccordionTab header="Sinopsis">
                        <p className="m-0">
                            {sinopsis}
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Categorías">
                        <ul>
                        {
                            categorias.map((elemento) =>{
                                return <li key={elemento}>{elemento}</li>
                            })
                        }
                        </ul>
                    </AccordionTab>
                </Accordion>
            </Card>
    )
}
export default CartaPeli;
        