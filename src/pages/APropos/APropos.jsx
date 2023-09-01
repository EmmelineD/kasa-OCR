import "./APropos.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import Background from "../../images/background2.png";


export default function A_Propos() {
    return (
        <>
            <div className="aProposContainer">
                <div className="aProposBackground"></div>
                <div className="aProposDropdown">
                    <Dropdown title="Fiabilité" array={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}/>
                    <Dropdown title="Respect" array={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}/>
                    <Dropdown title="Service" array={["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]}/>
                    <Dropdown title="Sécurité" array={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"]}/>
                </div>
            </div>
            
        </>
    )
}