import React from 'react'
import "./skillcard.css"

function SkillCard({skill}){
    return(
        <div className="skillCard">
            <div className="skill-icon">
        {skill.icon}
            </div>
            <label className="skillname">{skill.name}</label>


        </div>
    )
}

export default SkillCard