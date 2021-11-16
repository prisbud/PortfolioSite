import React from "react"
import './contact.css'
import SocialContact from "../../common/social-contact/index.js"
import Separator from "../../common/separator"

function Contact(){
    return(
        <div className="about">
            <separator />
            This is about file
            <div className="about-top">
                <div className="about-info">
                    Hello There , <br /> 
                    <span className="info-name"> I am Priya Risbud. </span><br></br>
                    I love to explore and experiment with web technologies
                </div>
                <div className="about-photo">
                    <img src={require('../../../asset/coding.png').default} className="pic-class"/>
                </div>
            </div>

            <div className="about-bottom">
                    <SocialContact />
            </div>
        </div>
    )
}

export default Contact