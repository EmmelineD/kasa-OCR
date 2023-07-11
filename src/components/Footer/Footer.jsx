import "./Footer.css";
import Logo from "../../images/Logo.png";
import Rights from "../../images/Rights.png";
import React from "react";

export default function Footer() {
    return (
        <div className="footerContainer">
            <img className="footerContainer_Logo" src={Logo} alt="Kasa" />
            <span className="footerContainer_Rights">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}