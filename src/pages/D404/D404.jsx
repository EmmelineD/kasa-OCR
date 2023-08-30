import "./D404.css";
import {Link} from 'react-router-dom';

export default function D404() {
    return (
        <>
            <div className="errorContainer">
                <span className="errorTitle">404</span>
                <span className="errorText">Oups! La page que vous demandez n'existe pas.</span>
                <a href="/" className="errorLink" >Retour à la page d'acceuil</a>
            </div>
            
        </>
    )
}