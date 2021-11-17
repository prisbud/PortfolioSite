import React from 'react';
import "./workCard.css"

function WorkCard({item}){
    return(
        <div className="workCard">

            <img src={item.img} className="work-logo" alt=""/>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div className="work-dates">
                    <label className="company-">{item.dateJoining}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>

    )
}

export default WorkCard;