import './App.css';
import React, { useState } from 'react';
import Router from './router';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { UserProvider } from './UserProvider';



function App() {

  return (
    /* <UserProvider> */
      
      <div >
        <Router />
      </div>
    /* </UserProvider> */
  );
}

export default App;
