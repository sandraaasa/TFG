import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Panel } from 'primereact/panel';
import Global from '../Global';
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import { Rating } from "primereact/rating";
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

const Aleatorio = (categoria) => {

    const url = Global.url;
    const [random, setpeli] = useState([]);
    const openBtnRef = useRef(null);

    const { imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster } = random;
    function getPeliCate() {
        axios.get(url + 'getoneCate/' + categoria.categoria).then(res => {
            setpeli(res.data.PeliRandom);
            console.log(categoria.categoria);
        })
    }
    

    const formatDate = (fecha) => {
        console.log(fecha);
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const img = "https://image.tmdb.org/t/p/w500" + poster;
    const header = (
        <img alt={imbd_id} src={img} className='max-h-10rem' />
    );

    return (

        <article className="bg-yellow-200 card" >
            <div className="bg-yellow-200 card-container flex flex-column align-content-around" >
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="TSC" icon="pi pi-refresh" size="large" onClick={getPeliCate} />
                </StyleClass>
                <Panel header={titulo} toggleable className='hidden animation-duration-500 box' >

                    <div className="m-0 flex flex-column justify-content-center align-items-center flex-wrap card-containe gap-3">

                        <div className="flex justify-content-center flex-wrap card-containe gap-3">
                            {header}
                            <div id='subtitlePeli'>
                                <p>Fecha: {fecha} </p>
                                <p> Minutos: {minutos}</p>
                                <p>Pais: {pais}</p>
                                <p>Estrellas: {valoracionTotal}</p>
                            </div>
                        </div>
                        <Inplace closable className='flex justify-content-center align-items-center flex-wrap card-containe gap-3' >
                            <InplaceDisplay >Sinopsis</InplaceDisplay>
                            <InplaceContent>
                                <p>{sinopsis}</p>
                            </InplaceContent>
                        </Inplace>
                    </div>
                </Panel>
            </div>
        </article>
    )
}
export default Aleatorio;
