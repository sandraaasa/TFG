import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import logo from '../assets/images/tsclogo.png';


export default function TemplateDemo() {
    const items = [
        {
            label: 'Buscar',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Categoria',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Accion',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Aventura',
                            icon: 'pi pi-fw pi-video'
                        },
                        {
                            label: 'Animacion',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Comedia',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Crimen',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Documental',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Drama',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Familia',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Mas',
                            icon: 'pi pi-fw pi-bookmark'
                        }
                    ]
                },
                {
                    label: 'Aleatorio',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Iniciar Sesion',
                    icon: 'pi pi-fw pi-user-plus',

                },
                {
                    label: 'Cerrar Sesion',
                    icon: 'pi pi-fw pi-user-minus',

                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;

    return (
        <div>

            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        