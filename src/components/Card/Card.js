import React, { Component } from "react";

class Card extends Component {
    
    render() {



        return (
            <div className="card" style={{backgroundImage: `url("${this.props.image}")`}}>
                <div className="cardhover" onclick="void(0)">
                    <div className="cardtext" onclick="void(0)">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                        <a href={this.props.deplink} target="_blank" rel="noopener noreferrer" className="cardlink whitelink" id="view"><i className="fas fa-binoculars fa-2x"></i></a>
                        <a href={this.props.ghlink} target="_blank" rel="noopener noreferrer" className="cardlink whitelink" id="github"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;