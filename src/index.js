import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import D_404 from './pages/D_404/D_404';
import A_Propos from './pages/A_Propos/A_Propos';
import Fiche_logement from './pages/Fiche_logement/Fiche_logement';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/D_404" element={<D_404/>} />
          <Route path="/A_Propos" element={<A_Propos/>} />
          <Route path="/Fiche-logement" element={<Fiche_logement/>} />
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>,
document.getElementById('root')
)

