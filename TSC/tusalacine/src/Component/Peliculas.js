import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';
import Carta from './Carta';

const Peliculas = () =>{
    const [pelis, setpelis] = useState([]);
    const url = Global.url;

    useEffect(() =>{
        getpelis();
    }, [pelis.length]);

    const getpelis = () =>{
        axios.get(url + 'getall').then(res =>{
            setpelis(res.data.peliget);
        })
    }
    return(
        <main className=''>
            <h1 className='mt-5'>Categoria seleccionada</h1>
            <section className="card flex justify-content-center">
                {
                    pelis.length > 0 ? (
                        
                        pelis.map((peli, i)=>{
                            return(
                                <Carta 
                                    key={i}
                                    id={i}
                                    peliData={peli}
                                />
                            ); 
                        })
                    ):(
                        <h3 className="mx-auto" >No hay Peliculas que mostrar</h3>
                    )
                }
            </section>

        </main>        
    );
}
export default Peliculas;