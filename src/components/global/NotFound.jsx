import React from "react";

import html from "../../components/constants/Icons/html5.png";
import css from "../../components/constants/Icons/css3.png";
import reactjs from "../../components/constants/Icons/react.png";
import csharp from "../../components/constants/Icons/c#.png";
import aspCore from "../../components/constants/Icons/asp.png";
import sql from "../../components/constants/Icons/sql.png";
import git from "../../components/constants/Icons/git.png";
import postman from "../../components/constants/Icons/postman.png";


const NotFound =()=>{
    return(
        <div className="not-found">
            <h1>Not Found!!!</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}
export default NotFound;