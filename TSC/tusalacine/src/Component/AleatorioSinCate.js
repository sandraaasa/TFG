import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DateTime } from "react-intl-datetime-format";
import { Chip } from 'primereact/chip';


const Random = ({ peliData }) => {

    const [visible, setVisible] = useState(false);

    const img = "https://image.tmdb.org/t/p/w500/" + peliData.poster;
    const intlConfig = {
        locale: "en-US",
        options: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }
    const time = (
        <>
            <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center"><i className="pi pi-spin pi-clock" /></span>
            <span className="ml-2 font-medium"><DateTime config={intlConfig}>{peliData.fecha}</DateTime></span>
        </>
    );
    const star = (
        <>
            <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center"><i className="pi pi-spin pi-star" /></span>
            <span className="ml-2 font-medium">{peliData.valoracionTotal}</span>
        </>
    );
    const world = (
        <>
            <span className="bg-primary-reverse border-circle w-2rem h-2rem flex align-items-center justify-content-center"><i className="pi pi-spin pi-globe" /></span>
            <span className="ml-2 font-medium">{peliData.pais}</span>
        </>
    );
    const minute = (
        <>
            <span className="ml-2 font-medium">  {peliData.minutos} minutos</span>
        </>
    );

    const header = (
        <div className='m-2 rounded-4 flex justify-content-center align-items-center'>
            <img alt={peliData.imbd_id} src={img} className='w-ful md:w-6 rounded-4' />
        </div>
    );
    const info = (
        <div className='flex flex-wrap justify-content-center align-items-center'>
            <p className='overflow-auto surface-overlay p-3 border-2 border-round w-8 lg:w-6 xl:w-4 h-20rem md:h-15rem lg:h-auto'>{peliData.sinopsis}</p>
            <div className='m-3 w-6 xl:w-3'>
                <p>
                    <Chip className="pl-0 pr-3" template={time} />
                    <Chip className="pl-0 pr-3 m-2" template={minute} />
                </p>
                <p><Chip className="pl-0 pr-3" template={world} /></p>
                <p><Chip className="pl-0 pr-3" template={star} /></p>
            </div>
        </div>

    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2 m-2">
            <Dialog header="Info" visible={visible} onHide={() => setVisible(false)} style={{ width: '70vw' }}>
                <div className='w-full flex flex-wrap justify-content-center align-items-center'>{info}</div>
            </Dialog>

            <Button label="Info" raised icon="pi pi-info-circle border-round" onClick={() => setVisible(true)} />

        </div>
    );


    return (
        <Card title={peliData.titulo} footer={footer} header={header} className='border-round max-w-full m-2 flex flex-column flex-wrap justify-content-center align-items-center'>
        </Card>
    )
}
export default Random;
