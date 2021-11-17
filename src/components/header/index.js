import React from 'react';
import './header.css'
import Web from './web/index'
import Mobile from './mobile/index'
import { FiGrid } from "react-icons/fi";
import {useState} from 'react'

function Header(){
    const[isOpen,setIsOpen] = useState(true)
    return(
        <div className="header">
           <div className="logo">Frontend Perspective</div>
           <div className="menu">
               <div className="web-menu">
                   <Web />
               </div>
               <div className="mobile-menu">
                  <div onClick={() => setIsOpen(!isOpen)} className="menu-icon" >
                   <FiGrid />
                   </div>
                   {isOpen ?(
                       <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />)
                       : (<div> </div>)
                   }
                   
               </div>
           </div>
        </div>
    )
}


export default Header