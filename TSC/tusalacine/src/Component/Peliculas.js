import React, { useEffect, useState } from 'react';
import Global from '../Global';
import axios from 'axios';
import Carta from './Carta';
import AsideLateral from "./AsideLateral";
import Aleatorio from "./Aleatorio";
import { Tooltip } from 'primereact/tooltip';

const Peliculas = () => {
    const url = Global.url;
    const [pelis, setpelis] = useState([]);
    const [random, setpeli] = useState([]);
    const [categoria, setCategoria] = useState('');

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
        console.log(categoria);
    };

    return (
        <main>
            <AsideLateral getCategoria={recibirCategoria}/>
                
            <div className='card contenedor backBlack'>
                <section className='backBlack card flex flex-wrap justify-content-center align-items-center'>
                    <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
                    <h1 className='logo' data-pr-tooltip="Selecciona una categoria" >Pelicula Random</h1>
                {
                    categoria ? <Aleatorio categoria={categoria} peliRandom={random}/> : <p>Seleccione una categoria para obtener una pelicula random</p>
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