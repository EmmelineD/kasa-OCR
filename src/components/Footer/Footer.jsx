import "./Footer.css";
import Logo from "../../images/Logo.png";
import React from "react";

export default function Footer() {
    return (
        <footer className="footerContainer">
            <img src={Logo} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}