import React, { useEffect, useState, useRef } from 'react';
import Global from '../Global';
import axios from 'axios';
import Carta from './Carta';
import AsideLateral from "./AsideLateral";
import Aleatorio from "./Aleatorio";
import { Dialog } from 'primereact/dialog';
import AleatorioSinCate from "./AleatorioSinCate";
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import { Panel } from 'primereact/panel';

const Peliculas = () => {
    const url = Global.url;
    const [pelis, setpelis] = useState([]);
    const [random, setpeli] = useState([]);
    const [categoria, setCategoria] = useState('');
    

    const openBtnRef = useRef(null);

    useEffect(() => {
        getpelis();
    }, [pelis.length]);

    const getpelis = () => {
        axios.get(url + 'getall').then(res => {
            setpelis(res.data.peliget);
        })
    }

    function getPeli() {
        axios.get(url + 'getone/').then(res => {
            setpeli(res.data.PeliRandom);
        })
    }

    const recibirCategoria = (datosHijo) => {
        setCategoria(datosHijo);
    };

    const peliSinCate = (
        <article className="bg-yellow-200 card" >
            <div className="bg-yellow-200 card-container flex flex-column align-content-around" >
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="TSC" icon="pi pi-refresh" size="large" onClick={getPeli} />
                </StyleClass>
                <Panel toggleable className='hidden animation-duration-500 box' >
                    <AleatorioSinCate 
                        peliData={random}
                    /> 
                </Panel>
            </div>
        </article>
    )

return (
    <main >
        <AsideLateral getCategoria={recibirCategoria} />

        <div className='card contenedor backBlack'>
            <section className='backBlack card flex flex-wrap justify-content-center align-items-center'>

                <h1 className='logo'>Pelicula Random</h1>
                {
                    categoria 
                        ? 
                        <Aleatorio categoria={categoria} /> 
                        : 
                        <div> 
                            {peliSinCate}
                            <p>Seleccione una categoría</p>
                        </div>
                }

            </section>
            <h1 className='mt-5'>Peliculas: {categoria}</h1>
            <section className="flex flex-wrap justify-content-center card-container gap-3">
                {
                    pelis.length > 0 ? (

                        pelis.map((peli, i) => {
                            return (
                                <Carta
                                    key={i + 1}
                                    id={i}
                                    peliData={peli}
                                />
                            );
                        })
                    ) : (
                        <h3 className="mx-auto" >No hay Peliculas que mostrar</h3>
                    )
                }
            </section>

        </div>

    </main>
);
}
export default Peliculas;