import React from "react";
import Navbar from "./components/navbar";
import "./style.css";
import Hero from "./components/hero"
import Card from "./components/Card"
import data from "./data"


export default function app(){
    console.log(data)
    const card = data.map(
        item => (
            <Card 
                key={item.id}
                item={item}
                // img={item.coverImg}
                // title={item.title}
                // price={item.price}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
            />
        )
    )
    return(
        <main>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {card}
            </section>
            
        </main>
        
    )
}