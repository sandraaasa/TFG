
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import Global from '../Global';

const Aleatorio =(peliData) => {
    const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal} = peliData;
    const url = Global.url;
    return (
        <article className=" card">
            <Fieldset legend="Pelicula" toggleable className='backBlack'>
                <p className="m-0">
                    {sinopsis}
                </p>
            </Fieldset>
        </article>
    )
}
export default Aleatorio;
        