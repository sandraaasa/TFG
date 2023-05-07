import React from 'react'; 
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogo.png';
import { Button } from 'primereact/button';


const Inicio = () => {
    return(
        <div alt="logo" className="logo">
            <div>
                <img src={logo} className='logoI' alt='logo'/>
                <img src={logo} className='logoI animacionLogo' alt='logo'/>
            </div>
            <Button label="Primary" text raised />
        </div>
    )

}
export default Inicio;