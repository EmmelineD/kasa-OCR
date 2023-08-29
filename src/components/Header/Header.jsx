import "./Header.css";
import Logo from "../../images/Logo.png";
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="headerContainer">
            <img className="headerContainerLogo" src={Logo} alt="Kasa" />
            <nav className="headerContainerLinks">
                <Link className="headerContainerLink" to="/">Accueil</Link>
                <Link className="headerContainerLink" to="/A-propos">A Propos</Link>
                <Link className="headerContainerLink" to="/D-404">erreur</Link>
                <Link className="headerContainerLink" to="/Fiche-logement">logement</Link>
            </nav>
        </div>
    )
}