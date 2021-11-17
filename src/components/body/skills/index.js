import React from "react"
import "./skills.css"
import Separator from "../../common/separator/index"
import SkillCard from './skillCard'
import {SkillsData} from '../../data/skills'


function Skills(){
    const data = SkillsData
    return(
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.lists.map((skill) => {
                                    return(
                                        <SkillCard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                            })}
            </div>
        </div>
    )
}

export default Skills