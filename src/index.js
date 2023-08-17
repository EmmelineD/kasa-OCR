import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import D404 from './pages/D404/D404';
import APropos from './pages/APropos/APropos';
import FicheLogement from './pages/FicheLogement/FicheLogement';
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
          <Route path="/D404" element={<D404/>} />
          <Route path="/APropos" element={<APropos/>} />
          <Route path="/FicheLogement" element={<FicheLogement/>} />
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>,
document.getElementById('root')
)

