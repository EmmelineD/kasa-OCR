import "./Header.css";
import Logo from "../../images/Logo.png";
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="headerContainer">
            <img className="headerContainer_Logo" src={Logo} alt="Kasa" />
            <nav className="headerContainer_Links">
                <Link to="/">Accueil - </Link>
                <Link to="/A_Propos">A Propos - </Link>
                <Link to="/Fiche_logement">Fiche Logement - </Link>
                <Link to="/D_404">erreur - </Link>
            </nav>
        </div>
    )
}