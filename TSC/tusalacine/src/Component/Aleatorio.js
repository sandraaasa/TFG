
import React, { useEffect, useState } from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import Global from '../Global';

const Aleatorio =() => {
    const [peliTSC, setPeli] = useState([]);
    const url = Global.url;
    return (

        <article className="card bg-yellow-200" >
            
            <Fieldset legend='titulo' toggleable >

                <p className="m-0">
                    'sinopsis'
                </p>
            </Fieldset>
        </article>
    )
}
export default Aleatorio;
        