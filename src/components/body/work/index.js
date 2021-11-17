import React from "react"
import "./work.css"
import Separator from "../../common/separator"
import {WorkData} from "../../data/work"
import WorkCard from './workCard'

function Work(){
    const data = WorkData;
    return(
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item) =>{
                    return (
                        <div className="">
                            <WorkCard item={item}/>
                            </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Work