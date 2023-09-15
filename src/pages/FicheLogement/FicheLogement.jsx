import "./FicheLogement.css";
import list from '../../logements.json';
import { Navigate, useParams } from 'react-router-dom';
import Carrousel from "../../components/Carrousel/Carrousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from '../../components/Tag/Tag.jsx';
import Rating from '../../components/Rating/Rating.jsx';



export default function FicheLogement() {
    // identifying the accomodation ID from the Url settings
    const { id } = useParams()
    // Find the accomodation corresponding in the list
    const accommodation = list.find((accommodation) => accommodation.id === id)

    return (
        <>
        {accommodation ? ( //If there is no error, then the content of the page is displayed
            <div className="accommodationContainer">
                <Carrousel key={accommodation.pictures} images={accommodation.pictures} />
                <div className="accommodationContainerTop">
                    <div className="accommodationContainerTopLeft">
                        <h1 className="accommodationTitle">{accommodation.title}</h1>
                        <p className="accommodationLocation">{accommodation.location}</p>
                        <Tag key={accommodation.tags} title="Tags" array={accommodation.tags}/>
                    </div>
                    <div className="accommodationContainerTopRight">
                        <div className="hostInformations">
                            <div className="hostName">
                                {accommodation.host.name}
                            </div>
                            <div className="hostPicture">
                                <img className="hostImage" src={accommodation.host.picture} alt="profil du propriétaire" />
                            </div>
                        </div>
                        <div className="ratingContainer">
                            <Rating rating={accommodation.rating} title="Note"/>
                        </div>
                    </div>
                </div>
                <div className="accommodationDropdownContainer">
                    <Dropdown key={accommodation.description} title="Description" array={[accommodation.description]} />
                    <Dropdown key={accommodation.equipments} title="Equipments" array={accommodation.equipments}/>

                </div>
            </div>
        ) : ( <Navigate replace to="/d-404" /> // If the accomodation doesn't exist, redirect to error page
            )
        }
        </>
    )
}