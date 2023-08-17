import "./FicheLogement.css";
import list from '../../logements.json';
import { useParams, Navigate } from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from '../../components/Tag/Tag.jsx';
import Rating from '../../components/Rating/Rating.jsx';



export default function Fiche_logement() {
    return (
        <>
            <div className="ficheLogementContainer">
                <Carrousel/>
                <h1>Title{/*{Logements.filter(l=>l.id === post.logementId)[0].title}*/}</h1>
                <span>Location</span>
                <span>host</span>
                <image>hostPicture</image>
                <span>rating</span>
                <div className="fiche_LogementDescription"></div>
                <div className="fiche_LogementEquipements"></div>
            </div>
            
        </>
    )
}