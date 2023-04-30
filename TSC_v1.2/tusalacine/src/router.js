import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Component/HeaderInicio';
import Header2 from './Component/HeaderPrincipal';

const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Header2/>
        </BrowserRouter>
    );

}
export default Router;