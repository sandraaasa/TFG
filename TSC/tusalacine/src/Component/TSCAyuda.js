
import React from 'react'; 

const Ayuda = ()=> {
    return (
        <div className="card backBlack">
            <div className="flex flex-column ">
                <div className='card backMBlack '>
                    <div>
                    Tu Sala Cine es una biblioteca de películas cuyo propósito principal es ayudar a encontrar
                    una opción aleatoria o según la categoría seleccionada por el usuario con toda la
                    información necesaria, incluyendo además una lista de todas las películas vistas o no vistas
                    de esa categoría. Pero además de eso, si no encuentras una película también puedes
                    solicitar incluir una película a través de un formulario para que otros puedan ver también
                    esas películas antiguas o que no todos conocen. Utilizando la tecnología de React y la
                    librería de PrimeReact para la interfaz de usuario(UI) y la API TheMovieDB para los datos
                    junto a MongoDB para almacenar los datos, creando así una página web accesible y
                    adaptable, que se ajuste a las necesidades de los usuarios y dispositivos
                    </div>
                </div>
                <div className='card backMBlack '>
                    <div>
                    Tu Sala Cine is a movie library whose main purpose is to help you find a random option or
according to the category selected by the user with all the necessary information, including
a list of all movies seen or not seen in that category. But besides that if you don't find a
movie you can also request to include a movie through a form so that others can also see
those old movies or movies that not everyone knows. Using React technology and the
PrimeReact library for the user interface and TheMovieDB API for the data along with
MongoDB to store the data, creating an accessible and adaptable web page that fits the
needs of users and devices
                    </div>
                </div>
                <div className='card backMBlack'></div>
            </div>
        </div>
    )
}

export default Ayuda;