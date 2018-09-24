import React, { Component } from "react";
import Card from "../../components/Card";

class Portfolio extends Component {

    render() {
        const soloCardProps = [
            {
                title: 'DEM BURGS',
                text: 'A full-stack app using a MySQL database to display burgs available to nom, and allows users to nom them or add their own.',
                deplink: 'https://dem-burgs.herokuapp.com/',
                ghlink: 'https://github.com/LefseTime/DEM-BURGS',
                image: 'https://i.imgur.com/ysd8V7p.png',
            },
            {
                title: 'Glorious Cheese Shoppe',
                text: 'A Node/MySQL app with customer and manager views for the Glorious Cheese Shoppe allowing each various capabilities for viewing, buying, and stocking various Glorious Cheeses of the World.',
                deplink: 'https://github.com/LefseTime/Glorious-Cheese-Shoppe',
                ghlink: 'https://github.com/LefseTime/Glorious-Cheese-Shoppe',
                image: 'https://imgur.com/tLlJhuv.png'
            },
            {
                title: 'Kitty Klick',
                text: `A React app in which users click cat pictures to increment their score. On each click, the cat pictures randomly rearrange. If the same picture is clicked twice, the score resets to zero. A high score for the current user's visit is also displayed.`,
                deplink: 'https://lefsetime.github.io/kitty-klick/',
                ghlink: 'https://github.com/LefseTime/Kitty-Klick',
                image: 'https://imgur.com/6IbEOnv.png'
            }
        ];

        const groupCardProps = [
            {
                title: 'Pet Cupid',
                text: 'Find your perfect fluffy friend!',
                deplink: 'https://petcupid.herokuapp.com/',
                ghlink: 'https://github.com/LefseTime/Pet-Cupid',
                image: 'https://imgur.com/ysup9ru.png'
            },
            {
                title: 'Running Logger',
                text: 'RUNNNNNN!!!!!!!',
                deplink: 'https://running-ledger.herokuapp.com/index.html',
                ghlink: 'https://github.com/LefseTime/Running-Logger',
                image: 'https://imgur.com/AF8Y86I.png'
            }
        ];

        return (
            <div className="main" id="portfolio">
                <div className="scroll">
                    <h1 className="title">Portfolio</h1>
                    <hr></hr>
                    <h2 className="title center">Individual Work</h2>
                    <div className="cards">
                        <Card {...soloCardProps[0]} />
                        <Card {...soloCardProps[1]} />
                        <Card {...soloCardProps[2]} />
                    </div>
                    <hr></hr>
                    <h2 className="title center">Group Projects</h2>
                    <div className="cards">
                        <Card {...groupCardProps[0]} />
                        <Card {...groupCardProps[1]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;