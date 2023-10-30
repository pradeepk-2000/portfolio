import React from "react";
import { about,experience } from "../constants/constants";
function About (){
    return(
        <div className="about-section" id="about">
            <div className="about-me">
                <div id="about-heading">
                   <h2 ><span id="heading-underline">About me</span></h2>
                </div>
                <div id="about-description">
                    <p>{about}</p> 
                </div>
            </div>

            <div className="experience">
                <div id="experience-heading">
                   <h2><span id="heading-underline">Experience</span></h2>
                </div>
                <div id="experience-description">
                    <p id="job-role">
                       <span id="gold-bg"></span>
                       <span id="role-desc">Front-End Developer</span> 
                    </p>
                <p id="job-description">
                    {experience}
                </p>  
                </div>
            </div>
        </div>
    )
}
export default About;