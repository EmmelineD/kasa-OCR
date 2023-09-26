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
                    <div className ="ThumbList">
                        {/* Thumb element is created for each accommodation */}
                         <Thumb array={list} /> 
                    </div>
                </article>
            </main>
            
        </>
    )
}