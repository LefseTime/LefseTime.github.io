import React, { Component } from "react";

class Card extends Component {
    // state = {
    //     image: image,
    //     title: title,
    //     text: words,
    //     githubLink: ghlink,
    //     deployedLink: deployedlink,
    // };

    // componentDidMount() {

    // };

    render() {
        return (
            <div className="card">
                <h1>Title</h1>
                <p>This is a card.</p>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="cardlink" id="view"><i class="fas fa-binoculars fa-2x"></i></a>
                <a href="https://github.com/LefseTime" target="_blank" rel="noopener noreferrer" className="cardlink" id="github"><i className="fab fa-github fa-2x"></i></a>
            </div>
        )
    }

}

export default Card;