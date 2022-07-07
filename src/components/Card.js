import React from "react"

export default function card(props) {
    let badge
    if(props.item.openSpots === 0){
        badge = "SOLD OUT";
    }
    else if(props.item.location === "Online"){
        badge = "Online"
    }
    return (
        <div className="card">
            {badge && <div className="card--badge">{badge}</div>}
            <img src={`./images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}