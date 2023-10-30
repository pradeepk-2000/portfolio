import React from "react";
import Header from "../templates/Header";
import BioLayout from "../templates/BioLayout";
import SkillsLayout from "../templates/SkillsLayout";
import ConnectForm from "../templates/ConnectForm";
import About from "../templates/About";
import Footer from "../templates/Footer";

function Home(){
    return(
        <div className="home-container">
            <div className="header-container">
                <Header/>
            </div>
            <div className="body-container">
                <BioLayout/>
                <About/>
                <SkillsLayout/>
                <div className="footer-container" id="sayhi">
                    <Footer/>
                    <ConnectForm/>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Home);