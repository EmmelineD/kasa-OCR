import './Dropdown.css';
import { useState } from "react";
import arrow from '../../images/arrow_close.png';

export default function Dropdown({DropdownTitle,DropdownDescription}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
         // Inversion of the value of isOpen
        setIsOpen(!isOpen)
    }

    return(
        <div className="DropdownContainer">
            <div  onClick={handleClick} className={isOpen ?`${"DropdownTitleOpen"}`:`${"DropdownTitleClosed"}` }>
                {DropdownTitle}
                <img  src = {arrow} className={isOpen ?`${"ArrowUp"}`:`${"ArrowDown"}`}
                alt='ouvrir ou fermer la section' />
            </div>
             {/* Display description only if isOpen is true */}
            {isOpen && (
                <div className="DropdownDescription">
                    <div>{DropdownDescription}</div>
                </div>
            )}
        </div>
    )
}
