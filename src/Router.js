import {React, useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";

import Home from './pages/Home/Home';
import D404 from './pages/D404/D404';
import APropos from './pages/APropos/APropos';
import FicheLogement from './pages/FicheLogement/FicheLogement';


export default function Routing() {

    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/d-404" element={<D404/>} />
            <Route path="/a-propos" element={<APropos/>} />
            <Route path="/fiche-logement/:id" element={<FicheLogement/>} />
        </Routes>
    )
}