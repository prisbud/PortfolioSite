import React from 'react';
import "./contact.css"
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact/index'
import { FiDownload } from "react-icons/fi";

function Contact(){
    return(
        <div className="contact">
        <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
        <div className="contact-left">
            <p>want to get in touch? contact me on any of the platforms </p></div>
        <SocialContact />
        
    </div>
        <div className="download">
            <a download href={require('../../../asset/Resume.pdf').default}>
                Download Resume 
                <FiDownload  className="download-icon"/>
            </a>
        </div>
    </div>
    )
}

export default Contact