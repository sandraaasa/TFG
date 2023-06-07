import "./App.css";
import React from "react";
import Router from "./router";
import "primereact/resources/primereact.min.css";
import 'primereact/resources/themes/arya-orange/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
