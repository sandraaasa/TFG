import React from 'react'; 
import '../assets/css/inicio.css';
import logo from '../assets/images/tsclogo.png';


const Inicio = () => {
    return(
        <div>
             <img alt="logo" src={logo} className="logo"/>;
        </div>
    )

}
export default Inicio;