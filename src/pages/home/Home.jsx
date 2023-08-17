import "./Home.css";
import Thumb from "../../components/Thumb/Thumb";
import list from '../../logements.json';


export default function Home() {
    return (
        <>
            <main className="homeContainer">
                <div className="homeBackground">
                    <div className="Background">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </div>
                <article className ="HomeThumbContainer">
                    <ul className ="ThumbList">
                        {/* Thumb element is created for each accommodation */}
                        {list.map(({id, cover, title}) => ( 
                            <li key={id} > 
                                <Thumb id = {id} cover = {cover} title = {title} /> 
                            </li>  
                        ))}
                    </ul>
                </article>
            </main>
            
        </>
    )
}