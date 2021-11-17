import React from 'react';
import './mobile.css'
import { FiXCircle,FiEdit3, FiHardDrive, FiBriefcase , FiUser } from "react-icons/fi";

function Mobile({isOpen,setIsOpen}){
    return(
        <div className="mobile">
           <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
               <FiXCircle />
           </div>
           <div className="mobile-options">
           <div className="mobile-option">
                <a href="#projects" >
                <FiEdit3  className="option-icon"/>  Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills" >
                <FiHardDrive className="option-icon"/> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work" >
                <FiBriefcase className="option-icon"/> Works
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact" >
                <FiUser className="option-icon"/> Contact us
                </a>
            </div>
           </div>
        </div>
    )
}

export default Mobile