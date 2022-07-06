import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function hero(){
    return(
        <section className="hero-main">
            <img src = {photoGrid} className="hero-photo-grid"/>
            <h2 className="hero-header">Online Experiences</h2>
            <p className="hero-para">oin unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}