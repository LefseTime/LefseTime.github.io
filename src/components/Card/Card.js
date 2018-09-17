import React from "react";

const Card = props => (
    <div className="card">
        <div className="cardhover">
            <div className="cardtext">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.deplink} target="_blank" rel="noopener noreferrer" className="cardlink" id="view" className="whitelink"><i className="fas fa-binoculars fa-2x"></i></a>
                <a href={props.ghlink} target="_blank" rel="noopener noreferrer" className="cardlink" id="github" className="whitelink"><i className="fab fa-github fa-2x"></i></a>
            </div>
            {/* <div className="cardlinks">
                <a href={props.deplink} target="_blank" rel="noopener noreferrer" className="cardlink" id="view" className="whitelink"><i className="fas fa-binoculars fa-2x"></i></a>
                <a href={props.ghlink} target="_blank" rel="noopener noreferrer" className="cardlink" id="github" className="whitelink"><i className="fab fa-github fa-2x"></i></a>
            </div> */}
        </div>
    </div>
)

export default Card;