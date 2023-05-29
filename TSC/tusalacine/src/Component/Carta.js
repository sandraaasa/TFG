import React, { useState } from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';


const CartaPeli =({id, peliData}) =>{

    const [isHeart, setIsHeart] = useState(false);
    const {categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster} = peliData;
    const formatDate = (fecha) =>{
        return fecha.substring(8, 10) + fecha.substring(4, 8) + fecha.substring(0, 4);
    }
    const subTitle = (
        <div id='subtitlePeli' className='text-gray-900'>
        <p>Fecha: {formatDate(fecha)} </p>
        <p> Minutos: {minutos}</p>
        <p>Estrellas: {valoracionTotal}</p>
        <p>Pais: {pais}</p>
        </div>
    );
    const img = poster;

    const header = (
        <img alt={imbd_id} src={img} />
    );

    const cambiarHeart = () => {
        setIsHeart(!isHeart);
    }

    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Info" icon="pi pi-info-circle border-round"/>
            <Button icon={`pi ${isHeart ? 'pi-heart-fill' : 'pi-heart' } `} rounded text severity="danger" aria-label="Favorite" onClick={cambiarHeart} />
        </div>
    );
    


    return (
            <Card title={titulo} subTitle={subTitle} footer={footer} header={header} className='border-round max-w-full md:max-w-14rem xl:max-w-22rem m-2 bg-orange-50 text-gray-900'>
                <Accordion >
                    <AccordionTab header="Sinopsis">
                        <p className="m-0">
                            {sinopsis}
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Categorías">
                        <ul>
                        {
                            categorias.map((elemento) =>{
                                return <li key={elemento}>{elemento}</li>
                            })
                        }
                        </ul>
                    </AccordionTab>
                </Accordion>
            </Card>
    )
}
export default CartaPeli;
        