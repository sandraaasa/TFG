import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Panel } from 'primereact/panel';
import Global from '../Global';
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Aleatorio = (categoria) => {


    const [random, setpeli] = useState([]);
    const url = Global.url;
    const openBtnRef = useRef(null);

    function getPeli () {
        axios.get(url + 'getone/' + categoria.categoria).then(res => {
            setpeli(res.data.PeliRandom);
            console.log(categoria.categoria)
        })
    }
/* 
    if (random) {
        
    } else {
        
    } */
    const { categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster } = random;
    const formatDate = (fecha) =>{
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const subTitle = (
        <div id='subtitlePeli' className='text-gray-900'>
        <p>Fecha: {formatDate(fecha)} </p>
        <p> Minutos: {minutos}</p>
        <p>Estrellas: {valoracionTotal}</p>
        <p>Pais: {pais}</p>
        </div>
    );
    const img = "https://image.tmdb.org/t/p/w500" + poster;
    const header = (
        <img alt={imbd_id} src={img} className='max-w-4rem'/>
    );

    return (

        <article className="bg-yellow-200 card flex flex-column align-items-center" >

            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                <Button ref={openBtnRef} label="TSC" icon="pi pi-refresh" size="large" onClick={getPeli}/>
            </StyleClass>


            <Panel  header={titulo} toggleable className='hidden animation-duration-500 box ' >
                
                <p className="m-0 ">
                    {header}
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
                </p>
            </Panel>

        </article>
    )
}
export default Aleatorio;
