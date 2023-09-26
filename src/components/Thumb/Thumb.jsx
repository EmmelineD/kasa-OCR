import "./Thumb.css";
import {Link} from 'react-router-dom';

export default function Thumb({array}) {

    return (
        <>
        {
            array.map(({id, cover, title}) => ( 
                <li key={id} > 
                    <div className="ThumbContainer">
                        <Link  to={`/fiche-logement/${id}`}>
                            <img className="ThumbContainerImg" src={cover} alt={title} />
                            <h2 className="ThumbContainerTitle"> {title} </h2>
                        </Link>
                    </div>
                </li>
            ))
        }
        </>
    )
}
