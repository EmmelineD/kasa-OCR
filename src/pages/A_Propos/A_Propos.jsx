import "./A_Propos.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import Background from "../../images/Background.png";


export default function Home() {
    return (
        <>
            <div className="404Container">
                <Header/>
                <div className="homeBackground">
                    <img className="Background" src={Background} alt="sea and cliff" />
                </div>
                <Dropdown/>
                {/* use the Usestate to add the right tittle/description in the Dropdown component */}
                <Footer/>
            </div>
            
        </>
    )
}