import React from "react";

const Card = props => (

    <div className="card">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.deplink} target="_blank" rel="noopener noreferrer" className="cardlink" id="view"><i className="fas fa-binoculars fa-2x"></i></a>
        <a href={props.ghlink} target="_blank" rel="noopener noreferrer" className="cardlink" id="github"><i className="fab fa-github fa-2x"></i></a>
    </div>
)

export default Card;