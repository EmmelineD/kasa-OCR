import styles from './Dropdown.css'
import { useState } from "react"
import arrow from '../../images/arrow_close.png'

function Collapse({collapseTitle , collapseDescription}){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ()=>{
         // Inversion of the value of isOpen
        setIsOpen(!isOpen)
    }

    return(
        <div className={styles.collapse_container}>
            <div  onClick={handleClick} className={isOpen ?`${styles.collapse_title_open}`:`${styles.collapse_title_closed}` }>
                {collapseTitle}
                <img  src = {arrow} className={isOpen ?`${styles.arrow_up}`:`${styles.arrow_down}`}
                alt='ouvrir ou fermer la section' />
            </div>
             {/* Display description only if isOpen is true */}
            {isOpen && (
                <div className={styles.collapse_description}>
                    <div>{collapseDescription}</div>
                </div>
            )}
        </div>
    )
}

export default Collapse