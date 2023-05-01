import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';

const Peliculas = () =>{
    const [pelis, setpelis] = useState([]);
    const url = Global.url;

    useEffect(() =>{
        getpelis();
        console.log(pelis);
    }, [pelis.length]);

    const getpelis = () =>{
        axios.get(url + 'getall').then(res =>{
            setpelis(res.data.pelis);
        })
    }
    return(
        <main className=''>
            <h1 className='mt-5'>Categoria seleccionada</h1>
            <section className="card flex justify-content-center">
                {
                    pelis.length > 0 ? {
                        pelis.map((peli, i)=>{
                            return
                        })
                    }:{
                        <h3 className="mx-auto" >No hay Peliculasque mostrar</h3>
                    }
                }
            </section>

        </main>        
    );
}
export default Peliculas;