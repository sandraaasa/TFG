import React from "react";
import Router from "./router";
import { PrimeReact } from 'primereact/api';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import "./index.css";
import { ThemProvider } from "./Context/ThemContext";

function App() {
  
  function tema (){
    const linkElementId = '/arya-orange/theme.css';
    
    PrimeReact.changeTheme(currentTheme: '/arya-orange/theme.css', newTheme: string, linkElementId: string, callback: Function)
  };
  return (
    <div>
      <ThemProvider>
        <Router />
      </ThemProvider>
    </div>
  );
}

export default App;
