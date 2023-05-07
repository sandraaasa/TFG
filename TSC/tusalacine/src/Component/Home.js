import React from 'react'; 
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogoinvert.png';
import { Button } from 'primereact/button';


const Inicio = () => {
    return(
        <div alt="logo" className="inicio">
            <div className='animacionDiv'>
                <img src={logo} className='logoI logo1 ' alt='logo'/>
                <img src={logo} className='logoI logo2 ani1' alt='logo'/>
            </div>
            <Button label="Categorias" text raised />
        </div>
    )

}
export default Inicio;