import React, { useEffect, useState } from 'react';
/* import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; */
import Global from '../Global';
import axios from 'axios';
import Carta from './Carta';
import AsideLateral from "./AsideLateral";
import Aleatorio from "./Aleatorio";

const Peliculas = () => {
    const [pelis, setpelis] = useState([]);
    
    /* const [peliTSC, setPeli] = useState([]); */
    
    const url = Global.url;

    useEffect(() => {
        getpelis();
    }, [pelis.length]);

    const getpelis = () => {
        axios.get(url + 'getall').then(res => {
            setpelis(res.data.peliget);
        })
    }
    /* const getpeli = () =>{
        axios.get(url + 'getrandom').then(res =>{
            setPeli(res.data.peliget);
        })
    } */


    return (
        <main>
            <AsideLateral />
            <div className='container contenedor'>
                {/* <Aleatorio
                    key={0}
                    peliSelec={pelis[0]}
                    
                /> */}
                <h1 className='mt-5'>Categoria seleccionada</h1>
                <section className="card flex justify-content-center ">
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