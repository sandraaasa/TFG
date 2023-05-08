import React, { useEffect, useState } from 'react';
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogoinvert.png';
import { Button } from 'primereact/button';
import Global from '../Global';
import axios from 'axios';


const Inicio = () => {
    const url = Global.url;
    const [pelis, setpelis] = useState([]);

    useEffect(() => {
        addpelis();
    });
    const addpelis = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=652e4fba8ba82b23170e2069858853c1&language=es&page=1').then(res => {
            setpelis(res.data);
        })
        /* axios.post(url + 'add', {
            imdb_id: pelis.items[0].id,
            categorias: pelis.items[0].genre_ids,
            titulo: pelis.items[0].title,
            fecha: pelis.items[0].release_date,
            minutos: 0,
            pais: 'EEUU',
            sinopsis: pelis.items[0].overview,
            valoracionTotal: pelis.items[0].vote_count
        } ) */
    }
    return (
        <div alt="logo" className="inicio">
            <div className='animacionDiv'>
                <img src={logo} className='logoI' alt='logo' />
                <img src={logo} className='logoI ani1' alt='logo' />
            </div>
            <Button label="Categorias" text raised severity="warning"/>
            
        </div>
    )

}
export default Inicio;