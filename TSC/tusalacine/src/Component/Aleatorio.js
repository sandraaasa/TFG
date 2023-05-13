import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Panel } from 'primereact/panel';
import Global from '../Global';
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import { Rating } from "primereact/rating";
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

const Aleatorio = (categoria) => {


    const [random, setpeli] = useState([]);
    const url = Global.url;
    const openBtnRef = useRef(null);

    function getPeli() {
        axios.get(url + 'getone/' + categoria.categoria).then(res => {
            setpeli(res.data.PeliRandom);
            console.log(categoria.categoria)
        })
    }
    /* 
        if (random) {
            
        } else {
            
        } */
    const { imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster } = random;
    const formatDate = (fech) => {
        return fech.substring(8, 10) + fech.substring(4, 8) + fech.substring(0, 4);
    }
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">{valoracionTotal}</span>
        </>
    );
    const subTitle = (
        <div id='subtitlePeli'>
            <p>Fecha: {fecha} </p>
            <p> Minutos: {minutos}</p>
            <p>Estrellas: {valoracionTotal}</p>
            <p>Pais: {pais}</p>
        </div>
    );
    const img = "https://image.tmdb.org/t/p/w500" + poster;
    const header = (
        <img alt={imbd_id} src={img} className='max-h-10rem' />
    );

    return (

        <article className="bg-yellow-200 card" >
            <div className="bg-yellow-200 card-container flex flex-column align-content-around" >
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="TSC" icon="pi pi-refresh" size="large" onClick={getPeli} />
                </StyleClass>


                <Panel header={titulo} toggleable className='hidden animation-duration-500 box' >

                    <p className="m-0 flex flex-column justify-content-center align-items-center flex-wrap card-containe gap-3">

                        <div className="flex justify-content-center flex-wrap card-containe gap-3">
                            {header}
                            {subTitle}
                        </div>
                        <Inplace closable className='flex flex-row justify-content-center align-items-center flex-wrap card-containe gap-3' >
                            <InplaceDisplay >Sinopsis</InplaceDisplay>
                            <InplaceContent>
                                <p>{sinopsis}</p>
                            </InplaceContent>
                        </Inplace>
                    </p>
                </Panel>
            </div>
        </article>
    )
}
export default Aleatorio;
