import "./FicheLogement.css";
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import Footer from "../../components/Footer/Footer";


export default function Fiche_logement() {
    return (
        <>
            <div className="ficheLogementContainer">
                <Carrousel/>
                <h1>Title</h1>
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