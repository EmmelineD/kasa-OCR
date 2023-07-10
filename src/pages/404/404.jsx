import "./404.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function Home() {
    return (
        <>
            <div className="404Container">
                <Header/>
                <span>404</span>
                <span>Oups! La page que vous demandez n'existe pas.</span>
                <span>Retour à la page d'acceuil</span>
                <Footer/>
            </div>
            
        </>
    )
}