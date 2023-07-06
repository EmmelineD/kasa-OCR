import "./Header.css";
import Logo from "../../images/logo.png";
import React from "react";

<div className="headerContainer">
    <div className="headerContainer_Left">
        <img className="headerContainer_Logo" src={Logo} alt="Kasa" />
    </div>
    <div className="headerContainer_Right">
        <div className="headerContainer_Links">
            <span className="headerContainer_Link">Acceuil</span>
            <span className="headerContainer_Link">A Propos</span>
        </div>
    </div>
</div>