import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import Global from '../Global';

const Aleatorio =(categoria) => {
    const [peliTSC, setPeli] = useState([]);
    const url = Global.url;

    console.log(categoria.categoria);
    useEffect(() => {
        getPeli();
    }, [categoria]);


    const categorias = [];
    const imbd_id = "";
    const titulo = "";
    const fecha = "";
    const minutos = "";
    const pais = "";
    const sinopsis = "";
    const valoracionTotal = "";
    const poster = "";

    const getPeli = () => {
        axios.get(url + 'getone/' + categoria.categoria).then(res => {
            setPeli(res.data.peliget);
            const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster} = peliTSC;
            console.log(peliTSC);
        })
    }


    return (

        <article className="card bg-yellow-200" >
            
            <Fieldset legend='titulo' toggleable >
                <p className="m-0">
                    {sinopsis}
                </p>
            </Fieldset>

        </article>
    )
}
export default Aleatorio;
        