
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import Global from '../Global';

const Aleatorio =() => {
    const url = Global.url;
    return (

        <article className="card backBlack" >
            
            <Fieldset legend='titulo' toggleable >

                <p className="m-0">
                    'sinopsis'
                </p>
            </Fieldset>
        </article>
    )
}
export default Aleatorio;
        