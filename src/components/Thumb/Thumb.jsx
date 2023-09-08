import "./Thumb.css";
import {Link} from 'react-router-dom';

export default function Thumb({id,cover,title}) {

    return (
        <div className="ThumbContainer">
            <Link  to={`/fiche-logement/${id}`}>
                <img className="ThumbContainerImg" src={cover} alt={title} />
                <h2 className="ThumbContainerTitle"> {title} </h2>
            </Link>
        </div>
    )
}