import React from "react"
import './body.css'
import Work from "./work/index"
import About from "./About/index"
import Skills from "./skills/index"
import Projects from "./projects/index"
import Contact from "./Contact/index"

function Body(){
    return(
        <div className="body">
        <section id="about">
            <About />
        </section>
       
        <section id="work">
            <Work />
        </section>
       
        <section id="skills">
            <Skills />
        </section>

        <section id="projects">
            <Projects />
        </section>

       
        <section id="contact">
            <Contact />
        </section>
       
    </div>
    )
}

export default Body