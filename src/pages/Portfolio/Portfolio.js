import React, { Component } from "react";
import Card from "../../components/Card";

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
                <div className="scroll">
                    <h1 className="title">Portfolio</h1>
                    <div className="cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;