import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";

function App(){
    return(
        <div className="app-container">
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}
export default App;