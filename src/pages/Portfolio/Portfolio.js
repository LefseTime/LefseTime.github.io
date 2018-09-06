import React, { Component } from "react";

class Portfolio extends Component {
    state = {

    };

    componentDidMount() {

    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

    };

    render() {
        return (
            <div className="main" id="portfolio">
                <h1 className="title">Portfolio</h1>
            </div>
        );
    }
}

export default Portfolio;