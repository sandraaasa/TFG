import React from 'react';
import Router from "./router";
import { ThemProvider } from './Context/ThemContext';
import "primereact/resources/primereact.min.css";
import 'primereact/resources/primereact.css';                 // core css
import 'primeicons/primeicons.css';                           // icons
import 'primeflex/primeflex.css';                             // css utility

function App() {
  return (
    <ThemProvider>
      <Router />
    </ThemProvider>
  );
}

export default App;
