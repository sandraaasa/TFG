import React, { useState, useRef, useContext } from "react";
import logo from "../assets/images/tsclogoinvert.png";
import logo2 from "../assets/images/tsclogo.png";
import mern from '../assets/images/MERN.png';
import { Fieldset } from 'primereact/fieldset';
import { NavLink, Navigate } from "react-router-dom";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import ThemContext from "../Context/ThemContext";

const Ayuda = () => {
    const toast = useRef(null);
    const { theme, cambiarTheme } = useContext(ThemContext);

    const showCopi = () => {
        navigator.clipboard.writeText("sandra_saanchez@hotmail.com");
        toast.current.show({ severity: 'success', summary: 'Copiado', detail: 'Correo copiado al portapapeles', life: 5000 });
    }

    const discord = () => {
        window.location.href = "https://discord.gg/ZJuXknnp";
    }
    
    return (
        <div >
            <Toast ref={toast} />
            <div className="w-full text-center">
                <img
                    alt="logo"
                    src={theme == true ? logo2 : logo}
                    height="300"
                    className="mr-2 "

                />
            </div>

            <div className="flex flex-column justify-content-evenly md:ml-8 md:mr-8">
                <Fieldset className="m-2">
                    <NavLink to="/" className="deco logoH"><h1>¿Quienes somos?</h1></NavLink>
                    <TabView className="">
                        <TabPanel header="Español">
                            <p className="m-2">
                                Tu Sala Cine es una biblioteca de películas cuyo propósito principal es ayudar a encontrar
                                una opción aleatoria o según la categoría seleccionada por el usuario con toda la
                                información necesaria, incluyendo además una lista de todas las películas vistas o no vistas
                                de esa categoría. Pero además de eso, si no encuentras una película también puedes
                                solicitar incluir una película a través del correo o por nuestro servidor de discord para que otros puedan ver también
                                esas películas antiguas o que no todos conocen. Utilizando la tecnología de React y la
                                librería de PrimeReact para la interfaz de usuario(UI) y la API TheMovieDB para los datos
                                junto a MongoDB para almacenar los datos, creando así una página web accesible y
                                adaptable, que se ajuste a las necesidades de los usuarios y dispositivos.
                            </p>
                        </TabPanel>
                        <TabPanel header="English">
                            <p className="m-2">
                                Tu Sala Cine is a movie library whose main purpose is to help you find a random option or
                                according to the category selected by the user with all the necessary information, including
                                a list of all movies seen or not seen in that category. But besides that if you don't find a
                                movie you can also request to include a movie through a form so that others can also see
                                those old movies or movies that not everyone knows. Using React technology and the
                                PrimeReact library for the user interface and TheMovieDB API for the data along with
                                MongoDB to store the data, creating an accessible and adaptable web page that fits the
                                needs of users and devices.
                            </p>
                        </TabPanel>
                    </TabView>
                </Fieldset>
                <Fieldset className="m-2">
                    <h1>Tecnologías utilizadas</h1>
                        <div className="text-center">
                            <p className="m-2">
                                En esta página se usa una estructura MERN
                            </p>
                            <img src={mern} alt="mern" height="100" className="m-2" />
                            <p className="m-2">
                                Usamos diversas tecnologías
                                Axios
                                Prime react
                                y muchas mas ^-^
                            </p>
                            <p className="m-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <br/>
                            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. 
                            Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

                            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.
                            </p>
                        </div>
                </Fieldset>
                <Fieldset className="m-2">
                    <h1>Contáctanos</h1>
                        <div className="text-center">
                            <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;DISCORD</div>
                            <h3 className="text-900 font-bold text-5xl mb-3">Encuéntranos en nuestra comunidad</h3>
                            <p className="text-700 text-2xl mb-5">Coméntanos lo que desees. Cuando tengas dudas o problemas ahí estamos para ayudarte.</p>
                            <Button label="Únete" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" onClick={discord}/>
                            <p className="text-700 text-2xl m-5">También nos puedes mandar un correo </p>
                            <Button label="Mail" icon="pi pi-envelope" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" onClick={showCopi} />
                        </div>
                </Fieldset>
            </div>
        </div>
    )
}

export default Ayuda;