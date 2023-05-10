import './App.css';
import React, { useState } from 'react';
import Router from './router';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { UserProvider } from './UserProvider';
/* import MainContent from './MainContent';
import Footer from './Footer'; */



function App() {

  

  return (
    <UserProvider>
      
      <div >
        <Router />
      </div>
    </UserProvider>
  );
}

export default App;
