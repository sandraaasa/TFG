import React from "react";
import Router from "./router";
import { PrimeReact } from 'primereact/api';
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css"; // css utility
import "./index.css";
import { ThemProvider } from "./Context/ThemContext";

function App() {
  
  return (
    <div>
      <ThemProvider>
        <Router />
      </ThemProvider>
    </div>
  );
}

export default App;
