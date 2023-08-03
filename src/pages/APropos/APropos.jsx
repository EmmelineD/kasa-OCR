import "./APropos.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Dropdown/Dropdown";
import Background from "../../images/Background.png";


export default function A_Propos() {
    return (
        <>
            <div className="AProposContainer">
                <h1>A Propos</h1>
                {/*<Header/>
                <div className="homeBackground">
                    <img className="Background" src={Background} alt="sea and cliff" />
                </div>
                <Dropdown/>
                <Footer/> */}
                {/* use the Usestate to add the right tittle/description in the Dropdown component */}
            </div>
            
        </>
    )
}