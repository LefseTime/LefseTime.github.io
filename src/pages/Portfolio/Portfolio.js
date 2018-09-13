import React, { Component } from "react";
import Card from "../../components/Card";

class Portfolio extends Component {
    // state = {

    // };

    // componentDidMount() {

    // }



    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    // };

    constructor() {
        super();
        this.cardProps =
            {
                title: 'Title 1',
                text: 'text1'
            }
        //     },
        //     {
        //         title: 'Title 2',
        //         text: 'text2'
        //     }
        // ];   
    };

    render() {
        const cardProps = [
            {
                title: 'Title 1',
                text: 'text1',
                deplink: 'http://www.wickerpedia.org/',
                ghlink: 'http://www.wickerpedia.org/'
            },
            {
                title: 'Title 2',
                text: 'text2'
            }
        ]

        return (
            <div className="main" id="portfolio">
                <div className="scroll">
                    <h1 className="title">Portfolio</h1>
                    <hr></hr>
                    <h2 className="title center">Group Projects</h2>
                    <div className="cards">
                        <Card {...cardProps[0]} />
                        <Card {...cardProps[1]} />
                        <Card />
                    </div>
                    <hr></hr>
                    <h2 className="title center">Individual Work</h2>
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