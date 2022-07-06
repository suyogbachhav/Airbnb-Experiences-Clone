import React from "react";
import AirbnbLogo from "../images/airbnb-logo.png"

export default function navbar(){
    return(
        <nav>
            <img src={AirbnbLogo} className="nav--logo"/>
        </nav>
    )   
}