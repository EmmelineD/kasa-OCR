
import "./Carrousel.css";
import React from "react";
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowRight.png';


export default function Carrousel({picture, pictures}) {
  const [index, setIndex] = React.useState(0);

  // previous picture
  const prevImg = (index) => {
    index > 0 ? setIndex(index - 1) : setIndex((picture.lenth - 1))
  }

  // next picture
  const nextImg = (index) => {
    index < pictures - 1 ? setIndex(index + 1) : setIndex(0)
  }

  return (
    <div className="slideshow">
      <img className= "slideshowSlider"
        src={pictures[index]}
        alt="accommodation pictures"
        key={`slideshow-${index}`}
      />

      {/* If only one picture */}
      {pictures > 1 && (
        <>
          <div className="arrow_container">
            {/* previous picture button */}
            <button onClick={() => prevImg(index)}>
              <img
                className="arrow_left"
                src={arrowLeft}
                alt="flèche vers la gauche"
              />
            </button>
            {/* next picture button */}
            <button onClick={() => nextImg(index)}>
              <img
                className="arrow_right"
                src={arrowRight}
                alt="flèche vers la droite"
              />
            </button>
          </div>
          {/* picture number */}
          <p className="carrousel_number">
            {index + 1} / {pictures}
          </p>
        </>
      )}
    </div>
  )
}