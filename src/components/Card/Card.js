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
                <p>This is a card.</p>
                <a href="https://github.com/LefseTime" target="_blank" rel="noopener noreferrer" className="cardlink" id="github"><i className="fab fa-github fa-2x"></i></a>
            </div>
        )
    }

}

export default Card;