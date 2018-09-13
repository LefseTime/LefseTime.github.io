import React, { Component } from "react";
import Card from "../../components/Card";

class Portfolio extends Component {

    render() {
        const cardProps = [
            {
                title: 'Pet Cupid',
                text: 'Find your perfect fluffy friend!',
                deplink: 'https://petcupid.herokuapp.com/',
                ghlink: 'https://github.com/LefseTime/Pet-Cupid'
            },
            {
                title: 'Running Logger',
                text: 'RUNNNNNN!!!!!!!',
                deplink: 'https://running-ledger.herokuapp.com/index.html',
                ghlink: 'https://github.com/LefseTime/Running-Logger'
            }
        ];

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