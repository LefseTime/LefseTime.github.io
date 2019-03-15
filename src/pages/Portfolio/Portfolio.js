import React, { Component } from "react";
import Card from "../../components/Card";

class Portfolio extends Component {

    render() {
        const soloCardProps = [
            {
                title: 'Knitteracy',
                text: 'A full-stack app to generate text knitting charts. Technologies include Java, MySQL, Thymeleaf, JQuery.',
                deplink: 'http://knitteracy.com/',
                ghlink: 'https://github.com/LefseTime/Knitteracy',
                image: 'https://imgur.com/xQZwkoB.png',
            },
            {
                title: 'Poke_Fight™',
                text: 'A project to independently learn Python. Runs as a CLI or on the web via Flask, JQuery, and Heroku.',
                deplink: 'http://poke-underscore-fight.herokuapp.com/',
                ghlink: 'https://github.com/LefseTime/Poke_Fight',
                image: 'https://imgur.com/Xeq5efE.png',
            },
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
                text: 'A full stack app to match users to adoptable pets with a personality quiz. I worked with the PetFinder API and quiz logic.',
                deplink: 'https://petcupid.herokuapp.com/',
                ghlink: 'https://github.com/LefseTime/Pet-Cupid',
                image: 'https://imgur.com/ysup9ru.png'
            },
            {
                title: 'Running Logger',
                text: 'A full stack app to track runs. I worked with the weather API.',
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
                        <Card {...soloCardProps[3]} />
                        <Card {...soloCardProps[4]} />
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