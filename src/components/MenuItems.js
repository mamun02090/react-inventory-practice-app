import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react'
import '../styles/style.css'
export default function MenuItems({text, icon}){
    
    
    return(
        <>
            <FontAwesomeIcon icon={icon}/>
            <p className='menu-text'>{text}</p>
        </>
    )
}