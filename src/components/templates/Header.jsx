import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = ()=>{
    const [menuIcon, setMenuIcon] = useState(faBars)
    const handleNavButton =()=>{
      const navClass =  document.querySelector(".navbar-collapse");
        navClass.classList.toggle("collapse-true");
        menuIcon ===faBars ? setMenuIcon(faTimes) : setMenuIcon(faBars);
    }
    return(
        <div className="header">
            <div className="navbar">
            <div className="navbar-header">
                <div className="welcome-title">
                <span className="welcome">Welcome!</span>
                </div>
                <div className="nav-button">
                   <button onClick={handleNavButton}>
                   <span className="navbar-icon">
                   <FontAwesomeIcon icon={menuIcon} /> 
                    </span>
                         
                   </button> 
                </div>
            </div>
                <div className="navbar-collapse">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills-section">Skills</a></li>
                        <li><a href="#sayhi">Say Hi!</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Header);