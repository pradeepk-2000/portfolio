import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer (){
    return(
        <div className="footer-section">
            <div className="footer-details">
            <div id="mail-details" class="social-icon" data-icon="pradeepksept2000@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} fade/>
            </div>
            <div id="call-details" class="social-icon" data-icon="+9193460000000">
                <FontAwesomeIcon icon={faPhone} shake/>
            </div>
            <div id="linkedin-details" class="social-icon" data-icon="Linkedin">
               <a href="https://www.linkedin.com/in/pradeep-k-b61564217" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} bounce/>
                </a>
            </div>
            <div id="github-details" class="social-icon" data-icon="Github">
               <a href="https://github.com/pradeepk-2000" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} beat/>
                </a>
            </div>
            </div>
        </div>
    )
}
 export default Footer;