import "./FicheLogement.css";
import list from '../../logements.json';
import { useParams, Navigate } from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from '../../components/Tag/Tag.jsx';
import Rating from '../../components/Rating/Rating.jsx';



export default function FicheLogement() {
    // identifying the accomodation ID from the Url settings
    const { id } = useParams()

    // Find the accomodation corresponding in the list
    const accomodation = list.find(accomodation => accomodation.id === id)

    // If the accomodation doesn't exist, redirect to error page
    if (!accomodation) {
    return <Navigate to="/404" />
    }

    //Recovery of accomodation values to store them in variables
    const tags = accomodation.tags
    const equipements = accomodation.equipments
    const hostPicture = accomodation.host.picture
    const picturesList = accomodation.pictures
    const picturesLength = accomodation.pictures.length
    const ratingNumber = accomodation.rating

    return (
    <main className="accomodationContainer}">
    
        <Carrousel pictures={picturesList} picturesLength={picturesLength}/>
        
        <article className="accomodationDetails">
            <div>
                <h1 className="accomodationTitle">{accomodation.title}</h1>
                <p className="accomodationLocation">{accomodation.location}</p>

                <div className="tagsContainer">
                    {tags.map((tags, index) => (
                    <Tag key={`${index}-${tags}`} tagName={tags} />
                    ))}
                </div>
            </div>

            <div className="hostRatingContainer">
                <div className="host">
                    <p className="hostName">{accomodation.host.name}</p>
                    <img className="hostPicture" src={hostPicture} alt={accomodation.host.name} />
                </div>
                <div>
                    <Rating ratingNumber={ratingNumber}/>
                </div>
            </div>
        </article>

        <article className="dropdownContainer">
            <div className="dropdownDescription">
                <Dropdown 
                    DropdownTitle={<div className="accommodationDropdownTitle">Description</div>}
                    DropdownDescription={<div className= "accommodationDropdownDescription">{accomodation.description}</div>} 
                />
            </div>

            <div className="dropdownEquipment">
                <Dropdown 
                    collapseTitle={<div className="accommodationDropdownTitle">Equipements</div>}
                    collapseDescription={
                    <ul className="equipmentContainer">
                        {equipements.map((equipment) => (
                        <li key={`${accomodation.id}-${equipment}`} className="accomodationEquipmentsList">{equipment}</li>
                        ))}
                    </ul>
                    }
                />
            </div>
        </article>
    </main>
    )
}