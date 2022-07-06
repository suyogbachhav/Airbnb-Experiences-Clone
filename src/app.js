import React from "react";
import Navbar from "./components/navbar";
import "./style.css";
import Hero from "./components/hero"

export default function app(){
    return(
        <main>
            <Navbar />
            <Hero />
        </main>
        
    )
}