import "./Rating.css";
import RedStar from "../../images/RedStar.png";
import GreyStar from "../../images/GreyStar.png";


export default function Rating(ratingNumber) {
    // Add a table for rating
    const ratingStar =[]
    // Add red star for the rating
    for (let i = 0; i <ratingNumber; i++) {
        ratingStar.push(
            <img src={RedStar} alt={`${ratingNumber} étoiles`} key={`red-star-${i}`}/>
        )
    }
    // add grey star for add 5 star
    for (let i=0; i <5-ratingNumber; i++){
        ratingStar.push(
            <img src={GreyStar} alt={`${ratingNumber} étoiles`} key={`grey-star-${i}`} />  
        )
    }
    // Show stars
    return (
        <div className="starsContainer">
            {ratingStar}
        </div>
    ) 
}