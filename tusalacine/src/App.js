import './App.css';
import React from 'react';
import HeaderPrincipal from './Component/HeaderPrincipal';

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";    
/* import MainContent from './MainContent';
import Footer from './Footer'; */

function App() {
  return (
    <div >
      <HeaderPrincipal />
    {/* <MainContent />
      <Footer /> */}
    </div>
  );
}

export default App;
