import React from "react"
import './About.css'
import SocialContact from "../../common/social-contact/index.js"
import Separator from "../../common/separator"

function About(){
    return(
        <div className="about">
            <Separator />
           
            <div className="about-top">
                <div className="about-info">
                    Hello There , <br /> 
                    <span className="info-name"> I am Priya Risbud. </span><br></br>
                    I love to explore and experiment with web technologies.
                    <br/> <br></br>
                    Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a
passion of mine. 
<br></br><br></br>In addition to my knowledge base, I actively seek out new technologies and stay up
to date on industry trends and advancements. 
                </div>
                <div className="about-photo">
                    <img src={require('../../../asset/coding.png').default} className="pic-class" alt=""/>
                </div>
            </div>

            <div className="about-bottom">
                    <SocialContact />
            </div>
        </div>
    )
}

export default About