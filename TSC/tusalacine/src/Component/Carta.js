import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Global from '../Global';
import { Accordion, AccordionTab } from 'primereact/accordion';
/* import axios from 'axios';
import { Navigate } from 'react-router-dom'; */


const CartaPeli =({id, peliData}) =>{
    const url = Global.url;

    const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal} = peliData;
    const formatDate = (fecha) =>{
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const subTitle = "Fecha: " + formatDate(fecha) +"  Minutos: " + minutos;

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
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
                <AccordionTab header="Categoría">
                    
                </AccordionTab>
                <AccordionTab header="Sinopsis">
                    <p className="m-0">
                        {sinopsis}
                    </p>
                </AccordionTab>
                <AccordionTab header="Mas datos">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
            </Card>
    )
}
export default CartaPeli;
        