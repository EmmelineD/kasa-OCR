import "./Home.css";
import Thumb from "../../components/Thumb/Thumb";
import Footer from "../../components/Footer/Footer";
import Background from "../../images/Background.png";


export default function Home() {
    return (
        <>
            <div className="homeContainer">
                <div className="homeBackground">
                    <img className="Background" src={Background} alt="sea and cliff" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className="homeGallery">
                    <Thumb/>
                </div>
            </div>
            
        </>
    )
}