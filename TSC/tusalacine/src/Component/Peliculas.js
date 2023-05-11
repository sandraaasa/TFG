import React, { useEffect, useState } from 'react';
import Global from '../Global';
import axios from 'axios';
import Carta from './Carta';
import AsideLateral from "./AsideLateral";
import Aleatorio from "./Aleatorio";

const Peliculas = () => {
    const [pelis, setpelis] = useState([]);
    const [categoria, setCategoria] = useState('');
    const url = Global.url;

    useEffect(() => {
        getpelis();
    }, [pelis.length]);

    const getpelis = () => {
        axios.get(url + 'getall').then(res => {
            setpelis(res.data.peliget);
        })
    }
    const recibirCategoria = (datosHijo) => {
        setCategoria(datosHijo);
        console.log(datosHijo);
    };


    return (
        <main>
            <AsideLateral getCategoria={recibirCategoria}/>
                
            <div className='card contenedor backBlack'>
                <Aleatorio categoria={categoria}
                />
                <h1 className='mt-5'>Categoria seleccionada</h1>
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