
import "./Carrousel.css";
import React from "react";
import { useState } from "react";
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';


export default function Carrousel({images}) {


   //Creation of constants to define the number of images, and navigation between images

   const [index, setIndex] = useState(0) //Constant with a useState hook to listen for changes
   const length = images.length //Constant to have the number of dwellings

   //Function to move to the next image
   const nextSlide = () => {
       setIndex(index === length -1 ? 0 : index + 1)
   }
   //Function to switch to the previous image
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