import './Dropdown.css';
import { useState } from "react";
import arrow from '../../images/arrow_close.png';

export default function Dropdown({title,array}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
         // Inversion of the value of isOpen
        setIsOpen(!isOpen)
    }

    return(
        <div className="Dropdown">
            <div  onClick={handleClick} className={isOpen ?`${"DropdownTitleOpen"}`:`${"DropdownTitleClosed"}` }>
                {title}
                <img  src = {arrow} className={isOpen ?`${"ArrowUp"}`:`${"ArrowDown"}`}
                alt='ouvrir ou fermer la section' />
            </div>
             {/* Display description only if isOpen is true */}
            {isOpen && (
                <div className="DropdownDescription">{array?.map((text, index) => (
                    <div key={index}>{text}</div>
                    ))}</div>
            )}
        </div>
    )
}
