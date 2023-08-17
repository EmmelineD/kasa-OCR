import "./Rating.css";
import RedStar from "../../images/RedStar.png";
import GreyStar from "../../images/GreyStar.png";


export default function Rating(ratingNumber) {
    // Initialiser un tableau vide pour stocker les étoiles de notation
    const ratingStar =[]
    // Ajouter les étoiles rouges dans le tableau en fonction de la note donnée
    for (let i = 0; i <ratingNumber; i++) {
        ratingStar.push(
            <img src={RedStar} alt={`${ratingNumber} étoiles`} key={`red-star-${i}`}/>
        )
    }
    // Ajouter les étoiles grises restantes pour avoir 5 étoiles au total
    for (let i=0; i <5-ratingNumber; i++){
        ratingStar.push(
            <img src={GreyStar} alt={`${ratingNumber} étoiles`} key={`grey-star-${i}`} />  
        )
    }
    // Afficher les étoiles de notation
    return (
        <div className="starsContainer">
            {ratingStar}
        </div>
    ) 
}