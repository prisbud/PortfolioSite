import React from "react"
import './body.css'
import Work from "./work/index"
import Contact from "./contact/index"
import Skills from "./skills/index"
import Project from "./projects/index"

function Body(){
    return(
        <div className="body">
        <section id="about">
            <Contact />
        </section>
       
        <section id="work">
            <Work />
        </section>
        <section id="skills">
            <Skills />
        </section>
        <section id="projects">
            <Project />
        </section>
    </div>
    )
}

export default Body