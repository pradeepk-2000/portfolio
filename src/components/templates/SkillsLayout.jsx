import React from "react";
import { skillsInfo } from "../constants/constants";

const SkillsLayout =()=>{
    return(
        <div className="skills-section" id="skills-section">
            <div className="skills-heading">
               <h2 ><span id="heading-underline">My Skills</span></h2>
            </div>
            <div className="skills-info">
                {skillsInfo.map((skill,index)=>(
                    <div id="skill-slide" key={index}>
                        <div className="shimmer-bg"></div>
                        <p id="skill-name">{skill.skill_name}</p>
                        <img
                        src={skill.data} alt={skill.skill_name} />
                    </div>
                ))
                }
                </div>
        </div>
    ) 
}
export default SkillsLayout;

