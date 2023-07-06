import "./Home.css";
import Background from "../../images/Background.png";
import Header from "../../components/Header/Header";
import Thumb from "../../components/Thumb/Thumb";
import Footer from "../../components/Footer/Footer";


export default function Home() {
    return (
        <>
            <div className="homeContainer">
                <Header/>
                <div className="homeBackground">
                    <img className="Background" src={Background} alt="sea and cliff" />
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className="homeGallery">
                    <Thumb/>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}