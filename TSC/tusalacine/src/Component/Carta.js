import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';


const CartaPeli = ({ id, peliData }) => {

    const [isHeart, setIsHeart] = useState(false);
    const { categorias, imbd_id, titulo, fecha, minutos, pais, sinopsis, valoracionTotal, poster } = peliData;
    const formatDate = (fecha) => {
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

    const cambiarHeart = () => {
        setIsHeart(!isHeart);
    }

    const header = (
        <div className='flex '>
            <img alt={imbd_id} src={img} />

        </div>
    );





    return (
        <Card title={titulo} subTitle={subTitle} header={header} className='border-round max-w-full md:max-w-14rem xl:max-w-22rem m-2 bg-orange-50 text-gray-900'>
            <div className='grid '>
                <Inplace closable className='col-5'>
                    <InplaceDisplay><Button label="Sinopsis" icon="pi pi-info-circle border-round" /></InplaceDisplay>
                    <InplaceContent>
                        <div class="overflow-auto surface-overlay p-3 border-blue-500 h-10rem border-2 border-round">
                            {sinopsis}
                        </div>
                    </InplaceContent>
                </Inplace>
                <Inplace closable className='col-5'>
                    <InplaceDisplay><Button label="Categoría" icon="pi pi-info-circle border-round" /></InplaceDisplay>
                    <InplaceContent>
                        <ul className='overflow-auto  border-2 border-round'>
                            {
                                categorias.map((elemento) => {
                                    return <li key={elemento}>{elemento}</li>
                                })
                            }
                        </ul>
                    </InplaceContent>
                </Inplace>
                <Button className='col-1 m-2' icon={`pi ${!isHeart ? 'pi-eye' : 'pi-eye-slash'} `} rounded text severity="danger" aria-label="Favorite" onClick={cambiarHeart} />

            </div>
        </Card>
    )
}
export default CartaPeli;
