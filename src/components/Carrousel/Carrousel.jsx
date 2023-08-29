
import "./Carrousel.css";
import React from "react";
import { useState } from "react";
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';


export default function Carrousel({images}) {


   //Création des constantes pour définir le nombre d'images, et la navigation entre les images

   const [index, setIndex] = useState(0) //Constante avec un hook useState pour écouter les changements
   const length = images.length //Constante pour avoir le nombre de logements

   //Fonction pour passer à l'image suivante
   const nextSlide = () => {
       setIndex(index === length -1 ? 0 : index + 1)
   }
   //Fonction pour passer à l'image précédente
   const previewSlide = () => {
       setIndex(index === 0 ? length -1 : index -1)
   }

   return (
       <section className="slideContainer">
           <div className="slide">
               <img className="slideImage" src={images[index]} alt={images.title} key={images.id} />
                   <img className="arrowLeft" src={arrowLeft} onClick={previewSlide} alt="Left Arrow" />
                   <img className="arrowRight" src={arrowRight} onClick={nextSlide} alt="Right Arrow" />
           </div>
               <div className="indexInfo">
                   {index + 1}/{images.length}
               </div>
       </section>
   );
}