import React from 'react'
import './web.css'
import { FiEdit3, FiHardDrive, FiBriefcase , FiUser} from "react-icons/fi";

function Web(){
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project" >
                <FiEdit3  className="option-icon"/>  Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills" >
                <FiHardDrive className="option-icon"/> Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work" >
                <FiBriefcase className="option-icon"/> Works
                </a>
            </div>
            <div className="web-option">
                <a href="#contact" >
                <FiUser className="option-icon"/> Contact us
                </a>
            </div>
        </div>
    )
}

export default Web