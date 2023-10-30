import React from "react";
import img1 from "../constants/Images/profile.png";

function BioLayout (){
    return(
        <div className="bio-section" >
            <div className="bio-bg-color">
                <div className="bio-data">
              <h3>Hello! I'm Pradeep.</h3>
              <span id="bio-span1">A passionate web developer.</span>
               </div>
                 <div className="bio-image">
                    <img id="profile-img" src={img1} alt="Pradeep's profile"/>
                 </div>             
            </div>
        </div>
    );
}
export default React.memo(BioLayout);