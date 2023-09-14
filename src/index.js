import './fonts/montserrat/Montserrat-VariableFont_wght.ttf';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Routing from "./Router";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter> 
        <Header /> 
          <Routing />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
);

