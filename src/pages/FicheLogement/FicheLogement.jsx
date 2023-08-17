import "./FicheLogement.css";
import Carrousel from "../../components/Carrousel/Carrousel";



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