import "./Rating.css";
import RedStar from "../../images/RedStar.png";
import GreyStar from "../../images/GreyStar.png";


export default function Rating({rating,title}) {
    const scaleRating = rating

    //A table is created to add a variable [s], to match the rating of the establishment with the rating in the table
    const starRating = []
    for (let s = 1; s <=5; s++) {
        if (s <= scaleRating) {
            starRating[s] = true
        } else {
            starRating[s] = false
        }
    }

    return(

        <div className="rating">
            {starRating?.map((starNumber, index) => 
            <img className="ratingStars" src={starNumber ? RedStar : GreyStar} alt={starNumber ? "red star" : "grey star"} key={index} />
            )}
        </div>
    )
}