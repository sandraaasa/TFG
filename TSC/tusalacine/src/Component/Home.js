import React from 'react'; 
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogo.png';


const Inicio = () => {
    return(
        <div alt="logo" className="logo">
            <img src={logo} className='logoI' alt='logo'/>
            
        </div>
    )

}
export default Inicio;